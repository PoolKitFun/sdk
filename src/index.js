import express from "express"
import http from "http"
import { Server } from "socket.io"
import dotenv from "dotenv"

import { checkMessage } from "./automod/automod.js"
import { createPoll, votePoll, getPoll } from "./polls/pollManager.js"
import { speak } from "./tts/ttsEngine.js"

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.static("public"))

io.on("connection", (socket) => {

  console.log("viewer connected")

  socket.on("chat", ({user, message}) => {

    if (!checkMessage(message)) {
      socket.emit("blocked", "Message blocked by automod")
      return
    }

    speak(`${user} says ${message}`)

    io.emit("chat", {user, message})
  })

  socket.on("create_poll", (data) => {
    createPoll(data)
    io.emit("poll_update", getPoll())
  })

  socket.on("vote", (option) => {
    votePoll(option)
    io.emit("poll_update", getPoll())
  })

})

server.listen(process.env.PORT, () => {
  console.log("PoolKit running on port", process.env.PORT)
})
