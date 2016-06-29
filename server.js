var express = require("express");
var http = require('http');
var app = express();
var server = http.createServer(app); //create a server with express included
 
 // serves main page
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/en', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/bg', function(req, res){
    res.sendFile(__dirname + '/index_bg.html');
});

var port = process.env.PORT || 5000;
server.listen(port);
console.log("Listening on port " + port);

