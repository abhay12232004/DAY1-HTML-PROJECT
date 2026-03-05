// const fs = require("fs") //fs is build in Module


//sync
// fs.writeFileSync("./text.txt","Hey There") //current dir , test.txt file create 

// async
// fs.writeFile("./text.txt","Hey There async",(err)=>{})

// using async you dont have to take the callack function 
const fs = require("fs")
let file = 'output.txt'
let data ="Hello students how are you?"
// fs.writeFileSync(file,data)


// fs.readFileSync(file,'utf8')
fs.writeFile(file,data,{flag:'a'}, (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
