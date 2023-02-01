const { readFile, writeFile } = require('fs');

// $ this is asynchronous/non blcoking way to deal with files

// * what we did in the sync file we will do the same in the call back function
readFile('./contents/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log({ error: err });
    return;
  }
  console.log({ result: res });
});

writeFile('./contents/writtenFromAsync.txt', 'Hey ya man wassup!', (err, res) => {
  if (err) {
    console.log({ error: err });
    return;
  }
  console.log({ writtenResult: res });
});
