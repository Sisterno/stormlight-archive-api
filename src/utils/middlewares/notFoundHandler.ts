import boom from "@hapi/boom";
import { Request, Response } from "express";


function notFoundHandler(req:Request,res:Response) {
    const {
        output:{
            statusCode,
            payload
        }
    } = boom.notFound();
    
    res.status(statusCode).json(payload);
}

export {notFoundHandler}