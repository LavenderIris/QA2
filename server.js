var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// tells server we can accept and spit out json data
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

//static content folder for angular code  
app.use(express.static(path.join(__dirname, '/client/dist/')));
app.use(express.static(path.join(__dirname, './static')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8090, function(){
    console.log('App is running on port 8090');
})