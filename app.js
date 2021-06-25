var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;


// var SerialPort = require('serialport');
// const parsers = SerialPort.parsers;

// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });

// var port = new SerialPort('COM3',{ 
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// port.pipe(parser);

// var app = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(index);
//     // res.send(data);
// });


app.use('/static',express.static('static'))    // For serving static files
app.use(express.urlencoded())  


app.get('/',(req,res)=>{
    const params ={ }
    // res.status(200).render('./index.html',params);
    res.end(index)
})


// var io = require('socket.io').listen(app);

// io.on('connection', function(socket) {
    
//     console.log('Node is listening to port');
    
// });

// parser.on('data', function(data) {
    
//     console.log('Received data from port: ' + data);
    
//     io.emit('data', data);
    
// });






// app.listen(process.env.PORT || 3000);

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})