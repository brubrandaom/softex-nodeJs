const http = require("http")
const port = 8080
const hostname = "localhost"

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain")
    res.end("Hello world!")
})

server.listen(port, hostname, () => {
    console.log("SERVIDOR RODANDO")
})