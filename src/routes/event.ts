import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllEvent, getOneEvent } from "../services/event";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointEvent() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllEvent(),
            message: 'Events sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneEvent(req.params.id),
                message: 'One event sended',
            })
    
        }
    )
    return router;
}