import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllPower, getOnePower } from "../services/power";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointPower() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllPower(),
            message: 'Powers sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOnePower(req.params.id),
                message: 'One power sended',
            })
    
        }
    )
    return router;
}