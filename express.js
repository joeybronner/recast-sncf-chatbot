var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');
var flash = require('connect-flash');

module.exports = function () {
    // Init express application
    var app = express();

    // Configure models
    // No models for the moment

	// Enable logger (morgan)
    app.use(morgan('dev'));

    // Use Express middlewares
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({
    	secret: 'MEAN'
    }));

    // Set view engine
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'ejs');

    // Connect flash for flash messages
    app.use(flash());

    // Configure routing
    require('./app/routes/app.server.routes')(app);

	// Setting the app router and static folder
	app.use(express.static(path.resolve('./public')));

    return app;
};
