const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) =>{
    const url = req.url;
    const method = req.method
    if (url === "/"){
        fs.readFile('incomingmessage.txt',{encoding:'utf-8'},(err,data) => {
            if (err){
                console.log(err)
            }
            console.log('data from file' + data);
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title> Message app </title></head>');
            res.write(`<body>${data}</body>`)
            res.write('<body><form action ="message" method="POST"><input type="text" name="message"><button type="submit">send</button></body>');
            res.write('</html>');
            return res.end();
        })
    }
    if (url === "/message" && method === "POST"){
        const body = []
        req.on('data',(chunk) =>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('incomingmessage.txt',message,() => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            })
        })
    }

})

server.listen(3500)