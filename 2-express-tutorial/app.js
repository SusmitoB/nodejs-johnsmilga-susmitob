const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
const app = express();

app.listen(5000, () => {
  console.log('Listening at 5000!');
});

/*
$ we can use this below piece of code for the middleware
app.get('/', logger, (req, res) => {
  res.send(`You are at ${req.url}!`);
});

app.get(
  '/myRoute',
  logger,
  (req, res, next) => {
    console.log('Second middleware!');
    next();
  },
  (req, res) => {
    res.send(`You are at ${req.url}!`);
  }
);
*/

// * middleware for all the routes
app.use([authorize, logger]);
// * middleware for only routes starting with '/specific'
app.use('/specific', (req, res, next) => {
  console.log(req.url);
  next();
});
// * logging with a 3rd party logger, "morgan"
app.use('/log-with-morgan', morgan('dev'));

app.get('/', (req, res) => {
  console.log('I am from the base route!');
  res.send();
});

app.get('/route', (req, res) => {
  console.log('I am from the "route"!');
  res.send();
});
