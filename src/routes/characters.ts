import { Application, Request, Response } from "express";
import { characters,orders } from "../../utils/mocks/characters";

export function characterAPI(app:Application) {
    app.get('/api/character',(req:Request,res:Response)=>{
        res.json({
            data:characters,
            message: 'Characters sended',
            other:orders[ <number>characters[0].order ],
            other2:orders
        })
    })
    app.get('/api/character/:id',(req:Request,res:Response)=>{
        const idChar = characters.find(char=>{
            return char.id === req.params.id
        })        
        res.json({
            data:idChar,
            message: 'Character sended', 
        })
        
    })
}