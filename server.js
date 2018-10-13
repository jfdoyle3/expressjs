var express=require('express');
var app=express();

// long hand method / another way to call the HTML file
//app.get('/', function(request, response){
// response.send("Resistanse is Futile!!"); 
//   response.sendFile(__dirname+'/public/index.html');
//});

// Short hand express method to do the above method.
app.use(express.static('public'));

app.get('/blocks', function(request, response){
    var blocks=['Fixed','Movable','Rotating'];
    response.json(blocks);


});

app.listen(8079, function(){
    console.log('port open');
});