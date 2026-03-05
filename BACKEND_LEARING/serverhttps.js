// Creating server by importing createServer from https  

import {createServer} from 'http'

let port = 3000


// createserver takes two argumnet request and response 
let server = createServer( (request , res )=>{

    if(request.url === '/'){
        res.writeHead(200,{'Content-Type' : 'text'})
        res.write("This is a home page")
        res.end()
    }
    else if(request.url === '/about'){
        res.write("This is a about page")
        res.end()
    }
    else{
        res.end("page not found")
    }
    // console.log(request.url)    //printing the  requesting url 
    // res.end("hello this is the end of the response from the server")

})

// listen method to activate the server 
// two parameters port number and callback function
server.listen(port,()=>{
    console.log(`server is listening over ${port}`)   
})

