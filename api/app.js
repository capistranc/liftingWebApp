var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
    console.log("Connected correctly to server.");
    db.close();
});

app.get('/', function(req, res) {
  // MongoClient.model();
  res.send('ok');
});

// app.use('/', index);
// app.use('/users', users);

var insertDocument = function(db, callback) {
    db.collection('restaurants').insertOne( {
        "address" : {
            "street" : "2 Avenue",
            "zipcode" : "10075",
            "building" : "1480",
            "coord" : [ -73.9557413, 40.7720266 ]
        },
        "borough" : "Manhattan",
        "cuisine" : "Italian",
        "grades" : [
            {
                "date" : new Date("2014-10-01T00:00:00Z"),
                "grade" : "A",
                "score" : 11
            },
            {
                "date" : new Date("2014-01-16T00:00:00Z"),
                "grade" : "B",
                "score" : 17
            }
        ],
        "name" : "Vella",
        "restaurant_id" : "41704620"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
