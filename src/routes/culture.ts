import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllCulture, getOneCulture } from "../services/culture";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointCulture() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllCulture(),
            message: 'Cultures sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneCulture(req.params.id),
                message: 'One culture sended',
            })
    
        }
    )
    return router;
}