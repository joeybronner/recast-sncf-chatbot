process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Configure Express
var express = require('./express');
var recastai = require('recastai');
var request = require('request');
var xml2js = require('xml2js');
var BOT_TOKEN = '87eea43186b37e02bd49bf7df83e0021';

var client = new recastai.Client(BOT_TOKEN, 'en');

// Express
var app = express();
var port = process.env.PORT || 3000;

// Gloabl Settings
global.useProxy = true;
global.proxySettings = { proxy: 'http://proxy:8080' };

app.get('/sncf/nextdeparture/:iddeparture/to/:iddestionation', function (req, res) {

    var iIdDeparture = req.params.iddeparture;
    var iIdDestination = req.params.iddestionation;

    var options = {
        proxy: global.useProxy ? 'http://proxy:8080' : '',
        url: 'http://api.transilien.com/gare/' + iIdDeparture + '/depart/' + iIdDestination + '/',
        auth: {
            user: 'tnhtn438',
            password: 'BEt5uprE'
        }
    };

    request(options, function (err, response, body) {
        var parser = new xml2js.Parser();
        parser.parseString(body, function (err, result) {
            return res.json(result);
        });
    });

});

app.post('/recast/bot', function (req, res) {
    var data = req.body;

    var options = {
        proxy: global.useProxy ? 'http://proxy:8080' : '',
        conversationToken: data.conversationToken
    };
    client.textConverse(data.text, options)
        .then(function (botRes) {
            res.json(botRes.raw);
        });
});

// Bootstrap application
app.listen(port);

// Tell developer about it
console.log('Server running at http://localhost:' + port + '/');
