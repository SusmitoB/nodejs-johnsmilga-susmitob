const os = require('os');

console.log(`Current user --> ${JSON.stringify(os.userInfo())}`);
const obj = JSON.stringify({
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  hostname: os.hostname(),
});
console.log(`System resources --> ${obj}`);
