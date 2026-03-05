let fs = require('fs')

let data = fs.createReadStream('output.txt','utf8')

data.on('data' ,(chunk)=>{
    console.log("Chunk successfully added",chunk)
})

data.on('end' ,()=>{
    console.log("File ended ")
})
data.on('error' ,(chunk)=>{
    console.log("error occured !!")

})

