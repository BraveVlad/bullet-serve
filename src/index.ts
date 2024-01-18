import {json} from "body-parser"
import cookieParser from "cookie-parser"
import "dotenv/config"
import express from "express"
import {createServer} from "http"
import mongoose from "mongoose"

const app = express()

app.use(cookieParser())
app.use(json())

app.get("/api/hello", (req, res) => {
	res.send("world")
})

app.use(express.static("public"))

const server = createServer(app)
const port = process.env.PORT ?? 3000

async function init() {
	checkMongoConnectionString()
	listen()
}

async function checkMongoConnectionString() {
	if (!process.env.MONGO_CONNECTION_STRING) {
		throw new Error("No MongoDB connection string")
	}

	await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
		dbName: "bullet-serve-app",
	})
}

async function listen() {
	server.listen(port, () =>
		console.log(`Listening on http://localhost:${port}`)
	)
}

init()
