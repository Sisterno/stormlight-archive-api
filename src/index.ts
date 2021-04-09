import express,{ NextFunction, Request, Response } from "express";
import { config } from "dotenv";
const os = require('os');
import { ownRouter } from "./routes";


const app = express()
config();
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use((req:Request,res:Response,next:any)=>{
    console.log('consulta a '+ req.path); 
    next(); 
})
ownRouter(app);
app.listen(process.env.PORT,()=>{
    console.log('Listen on port http://'+os.networkInterfaces().eth0[0].address+':'+process.env.PORT)
    
})