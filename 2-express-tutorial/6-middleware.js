const express = require('express');
const logger = require('./logger');
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

app.use(logger);

app.get('/', (req, res) => {
  console.log('I am from the commonly used middleware!');
  res.send();
});

app.get('/route', (req, res) => {
  console.log('I am from the commonly used middleware!');
  res.send();
});
