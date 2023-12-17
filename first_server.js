const http = require('http')

const server = http.createServer((req,res) => {
    res.end("hey brother")
})

server.listen(3000)