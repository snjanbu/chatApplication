var client=io.connect(window.location.href);

var output=document.getElementById('output'),
handle=document.getElementById('handle'),
message=document.getElementById('message'),
send=document.getElementById('send');
feedback=document.getElementById('feedback');

//Add Listener for click button
send.addEventListener('click',()=>{
    client.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

message.addEventListener('keypress',()=>{
    client.emit('typing',handle.value);
});

//Receiving messages
client.on('chat',(data)=>{
    output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
    feedback.innerHTML='';
});

client.on('typing',(data)=>{
    feedback.innerHTML='<p><em>'+data+' is typing...</em></p>';
});