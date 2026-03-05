let fs = require('fs')
let b = fs.createWriteStream('outputstream.txt')
b.write("Hello world line1\n")
b.write("Hello world line2\n")
b.write("Hello world line3\n")
b.write("Hello world line4\n")
b.write("Hello world line5\n")

b.end()
b.on('finish' ,()=>{
    console.log(`i have done writing in the file`)
    // fs.createReadStream()
})

b.on('error',(err)=>{
    console.log(err)
})