const { createReadStream, readFileSync } = require('fs');
const http = require('http');

// const stream = createReadStream('./contents/bigFile.txt');

// * this is to log the read info
// stream.on('data', (result) => {
//   console.log(result);
// });

const stream = createReadStream('./contents/bigFile.txt', { highWaterMark: 90000, encoding: 'utf8' });

// * this is to read by passing highWaterMark and encoding options in the options argument
stream.on('data', (result) => {
  // console.log(result);
});

const errStream = createReadStream('./contents/wrongFile.txt');

errStream.on('error', (result) => {
  console.log(result.errno);
});

const server = http.createServer((req, res) => {
  // $ this way the data goes as a whole
  // const text = readFileSync('contents/bigFile.txt', 'utf8');
  // res.end(text);
  // $ this way data goes in chunked manner (under network see the request for the resource is coming as "Transfer-Encoding: chunked")
  const fileStream = createReadStream('contents/bigFile.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(5000, () => {
  console.log('Listening at 5000!');
});
