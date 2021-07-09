import express,{ NextFunction, Request, Response } from "express";
import { config } from "dotenv";
const os = require('os');
import { getRoutes } from "./routes";
import { errorHandler,logErrors,wrapErrors } from "./utils/middlewares/errorHandler";
import { notFoundHandler } from "./utils/middlewares/notFoundHandler";


const app = express()
config();
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use((req:Request,res:Response,next:any)=>{
    console.log('consulta a '+ req.path); 
    next(); 
});


// Erros midleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

getRoutes(app);
//404
app.use(notFoundHandler);

app.listen(process.env.PORT,()=>{
    console.log('Listen on port http://'+os.networkInterfaces().eth0[0].address+':'+process.env.PORT)
    
})

//Test space
//------------------------------------------------
// import {getAllLocation} from './services/location'
// setInterval(()=>{
//     getAllLocation()
// },5000)

//------------------------------------------------