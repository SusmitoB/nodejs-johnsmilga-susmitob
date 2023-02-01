// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./3a-names');
const utils = require('./3b-utils');
const contentsToWatchout = require('./3c-alternative-modules');

utils(names.supeRNovA);
utils(names.heisenberg);
console.log({ contentsToWatchout });
