var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/', function(req, res){
    res.send('It is a beautiful day')
})

app.listen(3000, function() {
    console.log('Server started on port 3000')
})