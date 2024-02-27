//console.log(arguments);
//console.log(require('module').wrapper);

//module.exports
let C = require('./test-module-1')

let Calc1 = new C()
console.log((Calc1.add(2,4)));

//exports
// const calc2 = require('./test-module-2')
//console.log(calc2.add(2,5));

const {add} = require('./test-module-2')
console.log(add(2,5));


//caching
require('./test-module-3')
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()