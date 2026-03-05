import {gzip} from 'zlib'

import { createReadStream ,createWriteStream} from 'fs'

let thought = "Honesty is the best policy"
let read = createReadStream('output.txt')

gzip('thought', (err,data)=>{
    if(err) console.log(err)

    console.log(data.toString('base64'))
})
let b = createWriteStream('output.txt')
gzip('read' , (err, data)=>{
    if (err) console.log(err)

    b.write(data)
})