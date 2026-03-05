// which ever file you are creating and writing your code in it that file is known as module


// function add(first){
//     console.log(first)
    
// }
// // arrow function
//  sub = (first)=>{
//     console.log(first);
   
    
// } 
// add(10);    
// sub(20) 



export function add(first,second){
    sum=first+second
    return sum
}
// arrow function
export let sub = (first,second)=>{
    diff=first-second
    return diff
   
    
} 
export function mult(first,second)
{
    multiply=first*second
    return multiply
}
export function divi(first,second)
{
    division=first*second
    return division
}
// console.log(add(10,20))  
// console.log(sub(20,10))    
// console.log(mult(5,2))    
// console.log(divi(5,2))    
 
// module.exports={add,sub,mult,divi};     // exporting object

