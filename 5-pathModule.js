const path = require('path');

// $ our app is going to run in the different environemtns so 'path' is really an important module and should be learnt with full attention

// * logs the path seperater
console.log(path.sep);

// * path.join creates the file path according the way you want to
const filepath = path.join(`${path.sep}contents`, 'subFolder', 'test.txt');
console.log({ filepath });

const base = path.basename(filepath);
console.log({ base });

const absolutePath = path.resolve(__dirname, 'contents', 'subFolder', 'test.txt');
console.log({ absolutePath });
