const { readFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);

// readFilePromise('./contents/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/* 
$ using the Promise.allSettled instead of the Promise.all
$ Promise.all - we will get the value of the only failing promise so we will miss what happens to the other Promises in the array
$ Promise.allSettled - we will get the value for all the promise passed in the either resolved or rejected
*/

// $ Promise.all
Promise.all([
  readFilePromise('./contents/first.txt', 'utf8'),
  readFilePromise('./contents/second.txt', 'utf8'),
  readFilePromise('./contents/wrongFile.txt', 'utf8'),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// $ Promise.allSettled
Promise.allSettled([
  readFilePromise('./contents/first.txt', 'utf8'),
  readFilePromise('./contents/second.txt', 'utf8'),
  readFilePromise('./contents/wrongFile.txt', 'utf8'),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// $ async await approach
const getTheValues = async () => {
  try {
    const first = await readFilePromise('./contents/first.txt', 'utf8');
    const second = await readFilePromise('./contents/second.txt', 'utf8');
    console.log({ first, second });
  } catch (error) {
    console.log(error);
  }
};

getTheValues();
