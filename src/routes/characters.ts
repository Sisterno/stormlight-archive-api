import { Application, Request, Response } from "express";

export function characterAPI(app:Application) {
    app.get('/api/prueba',(req:Request,res:Response)=>{
        res.send('Preuba funciona')
    })
}