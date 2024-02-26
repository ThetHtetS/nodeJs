const fs = require('fs')
//const crypto = require('crypto')
// process.env.UV_THREADPOOL_SIZE = 4;
const start = Date.now();

setTimeout(()=>{
    console.log('timer 1 finish');
}, 0)

setImmediate(()=>{
    console.log('immediate 1 finish');
})
fs.readFile('./test-file.txt',(err,data)=>{
    console.log('read file finish')
    console.log('---------------');
    setTimeout(()=>{
        console.log('timer 1 finish');
    }, 0)
    
    setImmediate(()=>{
        console.log('immediate 1 finish');
    })
process.nextTick(()=>{
    console.log("next tick");
})
})
// console.log(process)

// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", ()=>{
//     console.log(Date.now() - start, "Password encrypted");  
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", ()=>{
//     console.log(Date.now() - start, "Password encrypted");  
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", ()=>{
//     console.log(Date.now() - start, "Password encrypted");  
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", ()=>{
//     console.log(Date.now() - start, "Password encrypted");  
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", ()=>{
//     console.log(Date.now() - start, "Password encrypted");  
// });

console.log('hello from top level code');
