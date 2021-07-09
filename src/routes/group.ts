import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllGroup, getOneGroup } from "../services/group";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointGroup() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllGroup(),
            message: 'Groups sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneGroup(req.params.id),
                message: 'One group sended',
            })
    
        }
    )
    return router;
}