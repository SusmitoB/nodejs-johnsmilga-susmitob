const express = require('express');
const server = express();

const PORT = 5000;

server.listen(PORT, () => {
  console.log('express server is up on port 5000!');
});

server.get('/', (req, res) => {
  res.status(200).send('First route!');
});

server.get('/about', (req, res) => {
  res.status(200).send('About route!');
});

server.all('*', (req, res) => {
  res.status(404).send('Fallback route! 404 Page not found!');
});
