var express=require('express');
var app=express();

app.get('/', function(request, response){
    response.send("Resistanse is Futile!!");
});

app.listen(8079, function(){
    console.log('port open');
});