import { Application, Request, Response, Router } from "express";
import { serv_characters } from "../services/characters";
import { createCharacterSchema, mongoIdSchema } from "../utils/mocks/characters";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { object } from "joi";


export function endpointChracters(){
    const router = Router()
    const char = new serv_characters();
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await char.getCharacters(),
            message: 'Characters sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await char.getCharacter(req.params.id),
                message: 'Character sended',
            })
    
        }
    )
    router.post(
        '/',
        validationHandler(object({ character: createCharacterSchema }), 'body'),
        async (req: Request, res: Response) => {
            const { character } = req.body;
            res.json({
                data: await char.createCharacter(character),
                message: 'Character injected',
            })
        }
    )
    return router;
}

// export { router };
