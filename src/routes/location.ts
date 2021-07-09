import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllLocation, getOneLocation } from "../services/location";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointLocation() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllLocation(),
            message: 'Locations sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneLocation(req.params.id),
                message: 'One location sended',
            })
    
        }
    )
    return router;
}