import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./hololive"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/hololivedb', router)

app.listen('3030', () => {
	console.log('Server Started')
}) 
