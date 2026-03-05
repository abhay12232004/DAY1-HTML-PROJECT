import {createConnection} from 'net'

let client = createConnection({
    port: 3000
}, ()=>{
    console.log(`connected to the server `)
    console.write(`Hello server from client `)
})

client.on(`data`,(data)=>{
    console.log(data.toString())
    client.end();

})


client.on('end',()=>{
    console.log(`server Disconnected `)
})