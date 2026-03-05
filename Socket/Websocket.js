import express from 'express';
import http from 'https';
import { Server } from 'socket.io' ;
import readline from 'readline';
import { createServer } from 'http';
import { read } from 'fs';
const path = require('path');


const app = express();

const Server = http.createServer(app);
const io = new Server(server);


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})


app.on('line',(text)=>{
    io.emit('server-msg',text);
})


io.on('connnection',(socket)=>{
    socket.on('client-msg',(val)=>{
        console.log('Client m msg bejna ',val);
        io.emit('server -msg','client says'+val);
    })
})

Server.listen(3000,()=>{
    console.log("Server is running over 3000");
})

