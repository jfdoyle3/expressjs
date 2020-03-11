let express=require('express');
let app=express();

// long hand method / another way to call the HTML file
//app.get('/', function(request, response){
// response.send("Resistanse is Futile!!"); 
//   response.sendFile(__dirname+'/public/index.html');
//});

// Short hand express method to do the above method.
app.use(express.static('public'));
//var blocks={
//    'Fixed': 'Stationary object',
//    'Movable': 'object than be moved',
//    'Rotating': 'object that can rotate'
//        };
//app.get('/blocks/:name', function(request, response){
//   var description=blocks[request.params.name];   
//    response.json(description);
    
//});

app.listen(8079, function(){
    console.log('port open');
});