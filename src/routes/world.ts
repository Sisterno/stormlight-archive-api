import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllWorld, getOneWorld } from "../services/world";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointWorld() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllWorld(),
            message: 'Worlds sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneWorld(req.params.id),
                message: 'One world sended',
            })
    
        }
    )
    return router;
}