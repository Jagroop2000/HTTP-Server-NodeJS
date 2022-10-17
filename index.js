const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{

    if(req.url === '/friends'){
     
    res.writeHead(200,{
        'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify({
        id :0,
        name :"Hello World"
    }));
}else if( req.url === '/messages'){
    res.write('<html>')
    res.write('<body>')
    res.write('<ul>')
    res.write('<li> Hello Json !!</li>')
    res.write('<li> What are your thoughts on Astronomy ?</li>')
    res.write('</body>')
    res.write('</html>')
    res.end()

}else{
    res.statusCode(404)
    res.end()
}
});

server.listen(PORT,()=>{
    console.log(`Listining on port ${PORT}...`);
});