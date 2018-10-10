var express=require('express');
var app=express();

//app.get('/', function(request, response){
// response.send("Resistanse is Futile!!"); 
//   response.sendFile(__dirname+'/public/index.html');
//});

app.use(express.static('public'));

app.listen(8079, function(){
    console.log('port open');
});