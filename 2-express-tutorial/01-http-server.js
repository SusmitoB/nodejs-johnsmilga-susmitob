const { readFileSync } = require('fs');
const http = require('http');

// $ We are reading the file with sync method because this will run only once when we start the server not everytime we request something to the server. If this had been inside the createServer we must be using the async method to avoid performance issues.
const myHtmlFile = require('fs').readFileSync('./sample.html');

/*
 * A port is basically a communication endpoint (search on wikipeadia for port for more info)
 * MIME types MDN (meadia types)
 */

const server = http.createServer(({ method, url }, res) => {
  // console.log({ method, url });
  // res.end('Hi welcome to my server!');

  // * if we pass text/plain istead of the text/html we will see the html code getting rendered on the screen instead. So, it is very important to pass correct content-type else we will see unexpected outcomes
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(myHtmlFile);
  res.end();
});

server.listen(5000);

const server2 = http.createServer((req, res) => {
  const { url } = req;
  let msg = '';
  switch (req?.url) {
    case '/':
      res.writeHead(200, { 'content-type': 'text/html' });
      msg = 'Welcome to my server!';
      break;
    case '/susmitob':
      res.writeHead(200, { 'content-type': 'text/html' });
      msg = 'Welcome to my server route is ' + url + ' !';
      break;
    default:
      res.writeHead(404, { 'content-type': 'text/html' });
      msg = 'Page does not exist! <strong>404</strong>';
      break;
  }
  res.write(`<div style="display: grid; place-items: center; font-family: sans-serif;"><h1>${msg}</h1></div>`);
  // this .end will also gets appended
  res.end('Appended from .end()');
});

server2.listen(5001);

// $ serving the whole application from vanilla node (to know more about the meadia type pls see MIME types MDN in google)

const serveMyAppPORT = 5002;
const navBarAppBaseURL = './navbar-app/';
const jsFile = readFileSync(`${navBarAppBaseURL}browser-app.js`);
const htmlFile = readFileSync(`${navBarAppBaseURL}index.html`);
const svgFile = readFileSync(`${navBarAppBaseURL}logo.svg`);
const styleFile = readFileSync(`${navBarAppBaseURL}styles.css`);

const serveMyApp = http.createServer((req, res) => {
  switch (req?.url) {
    case '/':
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(htmlFile);
      break;
    case '/browser-app.js':
      // * not working at first as I was passing text/js
      res.writeHead(200, { 'content-type': 'text/javascript' });
      res.write(jsFile);
      break;
    case '/logo.svg':
      // * not working at first as I was passing text/svg
      res.writeHead(200, { 'content-type': 'image/svg+xml' });
      res.write(svgFile);
      break;
    case '/styles.css':
      // * not working at first as I wrote wrong file path
      res.writeHead(200, { 'content-type': 'text/css' });
      res.write(styleFile);
      break;
    default:
      res.writeHead(404, { 'content-type': 'text/html' });
      msg = 'Page does not exist! <strong>404</strong>';
      break;
  }
  res.end();
});

serveMyApp.listen(serveMyAppPORT);
