var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Magic happens at port: ', port);
