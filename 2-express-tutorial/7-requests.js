const express = require('express');
const app = express();
const { people } = require('./data');

// * express.urlencoded - to parse the form data (in the req headers if we have Content-Type: application/x-www-form-urlencoded)
// * express.json - to parse the request for the (if req headers have Content-Type: application/json)
app.use([express.static('./methods-public'), express.urlencoded({ extended: false }), express.json()]);

app.listen(5000, () => {
  console.log('Listening at 5000!');
});

app.get('/api/people', (req, res) => {
  res.json({ success: true, data: people });
});

// $ as the form(index.html) is hosted on the same server as the backend so we can just mention the path else we have to give the exact api route for the post request
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.send(`Hey ${name}! Welcome to the application.`);
  }
  res.status(401).send('User needs to authorize itself to use the appication!!!');
});
