import {createReadStream, createWriteStream} from 'fs'

let readstream = fs.createReadStream('test.txt')

let writestream = fs.createWriteStream('pipeout.txt')
readstream.pipe(writestream)


writestream.on('finish',()=>{
    console.log('file create and data copied')
})
