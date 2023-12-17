const http = require('http')
const url = require('url')
const server = http.createServer((req,res) => {
    // console.log(req.url , req.method , req.headers)
    if (url === '/home'){
        res.setHeader('Content-Type','text/html')
        res.write('<h1> Welcome home </h1>')
        res.end()
    }
    else if (url === '/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<h1> Welcome To about us Page </h1>')
        res.end()
    }
    else if (url === '/node'){
        res.setHeader('Content-Type','text/html')
        res.write('<h1>Welcome to Node js server</h1>')
        res.end()
    }
    else {
        res.setHeader('Content-Type','text/html')
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(4000)

