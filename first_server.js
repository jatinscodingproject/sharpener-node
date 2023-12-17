const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.url , req.method , req.headers)
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> My first page </title></head>')
    res.write('<h1> JATIN DIXIT </h1>')
    res.write('</html>')
    res.end()
})

server.listen(4000)

