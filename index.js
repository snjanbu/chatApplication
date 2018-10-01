var express=require('express');
var socket=require('socket.io');

var app=express();
app.use(express.static('public'));
var port=process.env.port || 3000;

var server=app.listen(port,function(error){
    if(error){
        throw error;
    }
    console.log('Server started successfully');
});

var io=socket.listen(server);

io.on('connection',function(socket){
    console.log('Connection initialized with socket '+socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
        console.log('Emitting message:'+data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing', data);
    });

});