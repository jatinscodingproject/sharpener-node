const fs = require('fs')

const http = require('http')

const server = http.createServer();

server.on('request',(req,res) => {
    // first way
    // fs.readFile('input.txt',(err,data)=> {
    //     if (err) return console.error(err)
    //     res.end(data.toString())
    // })

    // second way
    // const rstream = fs.createReadStream("inputs.txt")
    // rstream.on('data' ,(chunkdata) => {
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err)
    //     res.end('file not found')
    // })

    //third way
    const rstream = fs.createReadStream('input.txt')
    rstream.pipe(res);
})

server.listen(4000,"127.0.0.1");
