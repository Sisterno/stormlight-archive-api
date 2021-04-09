import { Application, Request, Response,Router } from "express";
import { serv_characters } from "../services/characters";

const router = Router()
const char = new serv_characters();
router.get('/',async (req:Request,res:Response)=>{
    res.json({
        data:await char.getCharacters(),
        message: 'Characters sended'
    })
});
router.get('/:id',async (req:Request,res:Response)=>{       
    res.json({
        data:await char.getCharacter(req.params.id),
        message: 'Character sended', 
    })
    
})
router.post('/',async (req:Request,res:Response)=>{
    const {character} = req.body;   
    res.json({
        data:await char.createCharacter(character),
        message: 'Character injected', 
    })
    
})
export {router};
