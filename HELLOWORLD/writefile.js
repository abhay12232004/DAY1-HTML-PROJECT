import ram from 'fs'
// const ram=require('fs')
let file ='output.txt'
let data="hello students how are you all? this is by using a async type" 
// fs.writeFileSync(file,data)
// ram.writeFileSync('output.txt','hello student, good afternoon')
ram.writeFile(file,data,{flag:'a'},(err,data)=>{
   if(err)
   {
    console.log(err)
   }
   console.log(data)
})