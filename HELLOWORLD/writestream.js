import fs from 'fs'
let b=fs.createWriteStream('outputstream.txt')
b.write('Hello world this is by using write stream line no.1 \n')
b.write('Hello world this is by using write stream line no.2 \n')
b.write('Hello world this is by using write stream line no.3 \n')
b.write('Hello world this is by using write stream line no.4 \n')
b.write('Hello world this is by using write stream line no.5 \n')
b.end()
b.on('finish',()=>{
    console.log('i have done writing the data to the file')
    
})
b.on('error',(err)=>{
    console.log(err)
})