const { writeFile } = require('fs').promises;

writeFile('./contents/fsPromises.txt', `Hey ya Man I am coming from ${__filename}!`);
