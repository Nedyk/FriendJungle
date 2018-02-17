
//dependencies

var express = require('express'); 
var bodyParser = require('body-parser'); 
var path = require('path'); 


//configuration
var app = express(); 
//port
var PORT = process.env.PORT || 3000; 
//set up express to handle body-parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text())

//routes 
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//listener
app.listen(PORT, function(){
	console.log('listening at ' + PORT);
})