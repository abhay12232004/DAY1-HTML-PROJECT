// Creating a server by importing a function from a module http

import {createServer} from 'http'
let port=3000
let server=createServer((req,res)=>{
    console.log(req.url)
    // res.writeHead(200,{'content-type/plain'})
    // res.write{'hello students we are writing over a server'}
    res.end('hello this is end of the response of home page')
})
server.listen(port,()=>{
    console.log(`server is listening over ${port}`)
})




































