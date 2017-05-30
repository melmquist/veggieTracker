'use-strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8080;

var db = require('./database');
// var routes = require('./application/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

// app.use(routes);
app.use(require('./application/routes'));

app.use((err, req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

app.listen(port, () => {
  console.log("Server is listening on port ",  port);
})
