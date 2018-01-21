import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';

//using mongoose to connect to mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//adding require-js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//importing handlebars
const hbs = require('express-handlebars')
// import favicon from 'serve-favicon';

import index from './routes/index';

const app = express();
const debug = Debug('crypto-martket-watcher:app');
app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.engine('hbs', hbs({extname: 'hbs'}))
app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//initialize passport and session
app.use(require('express-session')({
    secret: 'mohamed the shinobi',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
