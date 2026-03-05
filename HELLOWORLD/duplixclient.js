import { createConnection } from "net";
let client=createConnection({port:3000},()=>{
    console.log('connected to server')
    client.write('hello server this is client side')

})
client.on('data',(data)=>{
    console.log(data.toString())
    client.end()

})
client.on('end',()=>{
    console.log('server disconnected')
})