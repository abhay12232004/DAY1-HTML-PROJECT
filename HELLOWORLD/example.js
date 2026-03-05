// console.log("Good morning!")
// variable declaration
// lit/var/const

// var Ram=10;
// var shyam=20;
// console.log(Ram+shyam)


// let new_greeting="Good morning! ";
// let lpu="Lovely professional university";
// console.log(new_greeting,lpu);


// Array
// let values=["Ram","shyam","Rohit"]
// console.log(values[0],values[1],values[2]);
// console.log(`First person: ${values[0]} Secondperson: ${values[1]} Third person: ${values[2]}`)


// let val=4;
// for(i=1;i<=10;i++)
// {
//     console.log(`${val} * ${i} = ${val*i}`)
// }


// let array=["Ram","Rohit","Mohan"]
// array.forEach(array => {
//     console.log(`Person name:${array}`)
// });
// import {add,sub,mult,divi} from './math.js';
import * as math from './math.js'
// let math=require('./math')
console.log(add(5,10))
console.log(sub(15,7))
console.log(mult(10,2))
console.log(divi(10,2))

