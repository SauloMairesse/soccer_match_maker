import cors from 'cors'
import dotenv from 'dotenv'
import routers from "./routers/routerIndex";
import express, { Express } from "express"

dotenv.config()
const app = express()

app.use(cors)
app.use(express.json())
app.use(routers)

app.get('/qualquer', (req, res) => { res.send('OLA') } )

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
console.log(`Server on port: ${PORT}`)
})
