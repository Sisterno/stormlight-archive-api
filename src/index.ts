import express from "express";
import { config } from "dotenv";
import { characterAPI } from "./routes/characters";
const os = require('os');


const app = express()
config();
characterAPI(app);
app.listen(process.env.PORT,()=>{
    console.log('Listen on port http://'+os.networkInterfaces().eth0[0].address+':'+process.env.PORT)
})