var http = require('http');
var edge = require('edge');
var fs = require('fs');
var express = require('express');
var app = express();

var callbacks = new Array();
process.on('uncaughtException', function (err) {
    console.log('uncaughtException ' + err);
});

app.configure(function () {
    app.use(function (req, res, next) {
        req.options = null;
        next();
    });
    app.use(express.favicon(__dirname + '/favicon.ico'));
    app.use(app.router);
});

app.all('*', function (req, res){

var hello = edge.func('./api/adapters/StartUp.dll');

hello('Node.js', function (error, result) {
    if (error) throw error;
     res.send(result);
});
   }
   )
app.listen(process.env.port)