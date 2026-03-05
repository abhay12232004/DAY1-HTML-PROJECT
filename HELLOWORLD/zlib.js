import {createGzip} from 'zlib'
import{createReadStream, createWriteStream} from 'fs'
//let thought='honesty is the best policy'
let read=createReadStream('test.txt')
//gzip('thought',(err,data)=>{
    // if(err) console.log(err)
    // else{
        // console.log(DataTransfer.toString('base64'))
// }
    // })
let b=createWriteStream('test.txt')
// gzip('read',(err,da)=>{
    // if(err)
    // {
    //     console.log(err)

    // }
    // else{
    //     b.write(da.toString('base64'))
    //     b.end()
    // }
    // })
    let gzip=createGzip()
    read.pipe(gzip).pipe(b)