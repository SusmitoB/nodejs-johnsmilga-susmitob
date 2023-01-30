const { readFileSync, writeFileSync } = require('fs');

// $ this is synchronous way to deal with the files

const path = require('path');
const os = require('os');

// *if you don't give the 2nd arg, the log will show buffered value and not the expected string.
const first = readFileSync('contents/first.txt', 'utf8');
const second = readFileSync('contents/second.txt', 'utf-8');

console.log({
  first,
  second,
});

writeFileSync('contents/subFolder/writtenFile.txt', `I am writing this from the ${path.basename(__filename)}!`);

// * this approach will overwrite the content
// setInterval(() => {
//   const freeMemory = os.freemem();
//   const currentTime = new Date().toLocaleString();
//   writeFileSync('contents/subFolder/freeMemoryRecord.txt', `Free memory at ${currentTime} is: ${freeMemory}\n`);
// }, 2000);

// * but here we want to keep the record so to do it we will be passing {flag: 'a'} in the arguments of writeFileSync
setInterval(() => {
  const freeMemory = os.freemem();
  const totalMemory = os.totalmem();
  const freePercentage = (freeMemory / totalMemory) * 100;
  const currentTime = new Date().toLocaleString();
  writeFileSync('contents/subFolder/freeMemoryRecord.txt', `Free memory at ${currentTime} is: ${freePercentage.toFixed(2)}%\n`, {
    flag: 'a',
  });
}, 2000);
