import {createServer} from 'net'

let server = createServer( (socket)=>{
    console.log(`Client is connected to server`)
    socket.on('data',(data)=>{
        
        console.log(data.toString());
        server.write('Welcome client to the server')

    })
    socket.on('end',()=>{
        console.log(`Client Disconnected`)
        server.end()
    })


})


server.listen(2000,()=>{
    console.log('server is ready and listening')

})