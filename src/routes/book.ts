import { Router, Request, Response } from "express";
import { object } from "joi";
import { getAllBook, getOneBook } from "../services/book";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { mongoIdSchema } from "../utils/mocks/characters";

export function endpointBook() {
    const router = Router()
    router.get('/', async (req: Request, res: Response) => {
        res.json({
            data: await getAllBook(),
            message: 'Books sended'
        })
    });
    router.get(
        '/:id',
        validationHandler(object({ id: mongoIdSchema }), 'params'),
        async (req: Request, res: Response) => {
            res.json({
                data: await getOneBook(req.params.id),
                message: 'One book sended',
            })
    
        }
    )
    return router;
}