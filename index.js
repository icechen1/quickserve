var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var currentMenus = [];
var id = 0;

app.set('port', (process.env.PORT || 5000));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('connected'); 
    socket.on('sendMenu', function(msg){
        console.log('sendMenu'); 
        console.log(msg); 
        socket.emit("getToken",id);
        id++;
    });
    socket.on('scanned', function(msg){
        console.log('scanned'); 
        console.log(msg); 
        socket.emit("scannedToken",msg);
    });
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
/*
http.listen(3000, function(){
  console.log('listening on *:3000');
});*/