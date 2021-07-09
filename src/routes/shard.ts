import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllShard, getOneShard } from "../services/shard";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointShard() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllShard(),
            message: 'Shards sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneShard(req.params.id),
                message: 'One shard sended',
            })
    
        }
    )
    return router;
}