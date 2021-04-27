import boom,{isBoom} from "@hapi/boom";
import { Request,Response,NextFunction } from "express";
import { config_var } from "../../config";

function withErrorStack(error:any,stack:any) {
    if(config_var.dev){
        return {...error,stack}
    }
    return error;
}

function logErrors(err:any,req:Request,res:Response,next:NextFunction){
    console.log(err);
    next(err);
}

function wrapErrors(err:any,req:Request,res:Response,next:NextFunction) {
    if (!isBoom(err)) {
        next(boom.badImplementation(err));
    }
    next(err);
}
function errorHandler(err:any,req:Request,res:Response,next:NextFunction) {
    const {output:{statusCode, payload}} = err;

    res.status(statusCode).json(withErrorStack(payload,err.stack));
}

export {
    logErrors,
    errorHandler,
    wrapErrors
}