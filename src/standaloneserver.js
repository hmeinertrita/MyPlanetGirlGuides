'use strict'

const express = require('express');

const app = express();

const socketio = require('socket.io');
const io = socketio()

io.on('connection', socket => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// sockets.init(io)

const server = app.listen('4000', () => {
  console.log(`Server started at port 4000`)
})

io.attach(server)
