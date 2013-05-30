/**
 * The server Module 
 *
 * @module server
 * @since 1.0.0
 */
/**
Server.js is the application entry point is responsable to receive the request and interact with the corrects modules and send the response to the client

@class server 
@constructor
**/
/**
@class server
@main server

*/
/** 
 * @method server
 * Zon.Remote.Api is using "Express", a minimal and flexible node.js web application framework, providing a robust set of features for building a robust user-friendly API quick and easy.
 * Zon.Remote.Api is using "zConfig", a library that allow to change config file without restart the app
 * @param {Object} req the http request received
 * @param {Object} res the http response object
 * @param {Object} next is a express funcionality that allow to serialize execution of functions
 */
var http = require('http');
var edge = require('edge');
var fs = require('fs');
var express = require('express');
var app = express();
var start = process.hrtime();

var callbacks = new Array();

//app.use(express.bodyParser());
process.on('uncaughtException', function (err) {
    console.log('uncaughtException ' + err);
});

app.configure(function () {
    app.use(function (req, res, next) {

        req.options = null;
        req.rawBodyRequest = null;
        res.header = null;
        req.cachebyip = null;
        req.elapsedtime = null;
        req.starttime = null;
        req.clientipaddress = null;
        req.selectedstbmac = null;
        req.selectedstbip = null;
        req.randomkeyid = null;      
        next();
    });
    /////  app.use(express.compress());
    //// app.use('/nds', express.static(__dirname + '/nds'));
    app.use(express.favicon(__dirname + '/favicon.ico'));
    // app.use(express.bodyParser()); 
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

/*
function SetupRequest(req, res, next) {
    req.randomkeyid = randomkeyidgenerator.generateTimeBased();
    req.starttime = process.hrtime(); // reset the timer
    next();f
}
*/

String.prototype.endsWith = function (str) {
    return this.slice(-str.length) == str;
}

app.listen(80)