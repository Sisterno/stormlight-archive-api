import boom from "@hapi/boom";
import joi,{Schema} from "joi";
import { Request, Response,NextFunction } from "express";
function validate(data:any,schema:Schema) {
    const {error} =  schema.validate(data);
    return error;
}

function validationHandler(schema:Schema,check = "body") { 
    return function(req:Request,res:Response,next:NextFunction){
        //@ts-ignore
        const error = validate(req[check], schema);
        error? next(boom.badRequest(error.message)): next();
    }
    
}
export {
    validationHandler
};