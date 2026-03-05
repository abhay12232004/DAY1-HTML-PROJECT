import fs from 'fs'
let a=fs.createReadStream('test.txt','utf8')
a.on('data',(chunk)=>{
    console.log('New chunk recieved: ',chunk)
})
a.on('end',()=>{
    console.log('finished reading the file')
})
a.on('error',(error)=>{
    console.log(error)
})
