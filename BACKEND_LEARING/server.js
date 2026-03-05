import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Hello Bhai");
    res.end();
});

server.listen(port, () => {
    console.log("Server running on port " + port);
});
