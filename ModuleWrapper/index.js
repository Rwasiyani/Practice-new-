import http from 'http'

const server = http.createServer((req, res)=>{

    if(req.url == '/'){
        res.write(' <h1> Welcome to Home Page </h1>')
    }else if(req.url == '/about'){
        res.write(' <h1> Welcome to About Page </h1>')
    }else{
        res.writeHead(404,"Error 404",{"Content-type": "text/html"})
        res.write(' <h1> Welcome to Error Page </h1>')
    }
    //res.end()
}).listen(8000,'127.0.0.1',()=>{
    console.log('127.0.0.1:8000')
})

