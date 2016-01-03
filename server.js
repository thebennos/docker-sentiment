// Generated by CoffeeScript 1.10.0
(function() {
  var app, bodyParser, express, morgan, sentiment, server;

  sentiment = require('sentiment');

  express = require('express');

  morgan = require('morgan');

  bodyParser = require('body-parser');

  app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(morgan('combined'));

  app.post('/', function(req, res) {
    var s;
    if (!req.body.text) {
      res.sendStatus(400);
    }
    s = sentiment(req.body.text);
    return res.send(s);
  });

  server = app.listen(8888, '0.0.0.0', function() {
    var host, port;
    host = server.address().address;
    port = server.address().port;
    console.log('Sentiment webserver listening at http://%s:%s', host, port);
    return console.log('Send POST requests with urlencoded "text" field as the payload.');
  });

}).call(this);