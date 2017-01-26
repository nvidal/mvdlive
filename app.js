var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var boliches = require('./routes/boliches');

var app = express();

//MONGODB - BD
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://nacho:nacho@ds127949.mlab.com:27949/heroku_qkkkv9rm';
//var mongoUri = 'mongodb://matrix:matrixIMM@localhost:27017/matrixdb';
//var mongoUri = 'mongodb://localhost:27017/mvdlive';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function (err) {
  throw new Error(err+' unable to connect to database at ' + mongoUri);
});

db.on('disconnected', function(ref){
  console.log("MONGO:disconnected");
});
db.on('close', function(ref){
  console.log("MONGO:close");
})

//---


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'logoM.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/boliches', boliches);

// MODELS
require('./models/boliche');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.error("[app.js] ERROR: "+ err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.error("[app.js] ERROR: "+ err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
