const http = require('http');

// const server = http.createServer((req, res) => {
//   res.write('Hey! Welcome to my server!');
//   res.end();
// });

const server = http.createServer((req, res) => {
  switch (req?.url) {
    case '/':
      res.end('Welcome to the home page!');
      break;
    case '/susmitob':
      res.end(`<div style="display: grid; place-items: center; color: brown">
      <h1>Welcome to Susmito\'s page</h1>
      </div>`);
      // $ I didn't write this 'break' so the app was breaking on the page refresh
      break;
    default:
      res.end('<h1>Invalid route</h1>');
      break;
  }
});
server.listen(5000);
