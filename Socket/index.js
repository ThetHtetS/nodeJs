const express =require('express');
const http = require('http')
const socket = require('socket.io')
const app = express();

let server = http.createServer(app)

server.listen(4000, ()=>{
    console.log("server is running on port 4000")
})


app.get('/', (req,res,next)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

const io = socket(server);
io.on('connection', (socket)=>{
    console.log('get connected', socket.id);
    socket.on('chat', (data)=>{
      io.emit('chat', data)
    })
    socket.on("typing", (name) => {
        socket.broadcast.emit("typing", name);
        io.emit('typing', name)
      });
})


