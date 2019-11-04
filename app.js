var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('root page');


})

server.listen(8080, '127.0.0.1', function(){
    console.log('server listen on port 8080')
})
