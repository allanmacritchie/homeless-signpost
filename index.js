// Load our config...
const config = require('./lib/config');

// Express
const express = require('express');

// handle POST requests
const bodyParser = require('body-parser');

// Template engine
const hbs = require('express-hbs');
// and the helpers
require('./lib/hbs-helpers');
// and the partials
require('./lib/hbs-partials');

// req.flash middleware
const flash = require('connect-flash');

// Setup Express
const app = express();
const router = express.Router();

// configure the view engine
app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/default.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');

// Handle differing types of POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Logging
app.use(require('morgan')('combined'));

// Session management
app.use(require('cookie-parser')());
app.use(require('express-session')({
    secret: config.secret,
    resave: false, saveUninitialized: false
}));

// One-time view messages for the user
app.use(flash());

// Load our pre-built passport integration for local SQL based authentication
const passport = require('./lib/auth');

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());
