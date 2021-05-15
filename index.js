//serverfile
const express = require('express');
const app = express();
const routes= require('./routes/index')
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/',routes)
app.use(express.static('public'));
//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/app/index.html');
//  });

io.on('connection', (socket) => {
  console.log('a user connected');
  var clientaddress = socket.request.connection.remoteAddress;
  socket.send("Ip Address:"+clientaddress);
  console.log("Ip address:"+clientaddress);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});