import { createServer } from 'http';
import { writeFile } from 'fs';

let port = 2000;

let server = createServer((req, res) => {
    let entry=`user reached : ${new Date().toLocaleString()}`
    console.log(entry)

    if (req.url === '/') {
        writeFile('log.txt',`${entry,req.url}`,{flag:'a'},(err)=>{

            if(err)console.log(err)
                console.log('entry logged')
            res.end(); 
    })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello World</h1>')
        res.end()
}else if (req.url === '/about') {
    writeFile('log.txt',entry,{flag:'a'},(err)=>{

            if(err)console.log(err)
                console.log('entry logged')
            res.end() 
    })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>About us</h1>');
        res.end()
    } 
    else if (req.url === '/contact') {
        writeFile('log.txt',entry,{flag:'a'},(err)=>{

            if(err)console.log(err)
                console.log('entry logged')
            res.end()
    })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Contact page</h1>')
        res.end()
    } 
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.write('<h1>Page not found</h1>');
    //     res.end();
    // }

});

server.listen(port, () => {
    console.log(`server is listening over ${port}`);
});
