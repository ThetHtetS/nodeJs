const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res)=>{
    ///////////solution 1
   
    //   fs.readFile('./test-file.txt', 'utf-8', (err, data)=>{
    //     res.end(data)
    //  })
    ////////////solution 2

   //  let readable = fs.createReadStream('./test-file.txt')
   //   readable.on('data', (data)=>{
   //      res.write(data)
   //   })
   //   readable.on('end', ()=>{
   //      res.end()
   //   })
   //   readable.on('error', ()=>{
   //      res.end('file npot found')
   //   })

   /////////////solutin 3
   let readable = fs.createReadStream('./test-file.txt')
   readable.pipe(res)
   //readableSource.pipe(writeable destination)
})

server.listen(8000)