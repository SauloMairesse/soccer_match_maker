import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

import routers from "./routers/routerIndex";

dotenv.config()
const app = express()
app
    .use(express.json())
    .use(cors)
    .use(routers)
  
const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
})