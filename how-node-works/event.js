
const eventEmitter = require('events')
const http = require('http')
//const Emitter = new eventEmitter()

class Sales extends eventEmitter {
    constructor(){
        super()
    }
}
const Emitter= new Sales()

Emitter.on('newSale', (stock)=>{
console.log(`new sale with ${stock} stock`);
})

Emitter.emit('newSale',7)

////////////////////

const server = http.createServer();

server.on('request', (req,res)=>{
    console.log(req.url);
    console.log("request received");
    res.end('request received')
})

server.on('close', (req,res)=>{
    console.log(req.url);
    console.log("server close");
})

server.listen(8000, ()=>{
    console.log('wating for request...');
})