import { Express } from "express";
import { router } from "./routes/characters";
export const ownRouter = (app:Express) =>{
    app.use('/api/character',router); 

}