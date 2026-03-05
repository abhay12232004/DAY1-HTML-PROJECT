import {createGzip} from 'zlib'

import { createReadStream ,createWriteStream} from 'fs'

let read = createReadStream('output.txt')

let b = createWriteStream('output.txt')

let gzip = createGzip()

read.pipe(gzip).pipe(b)