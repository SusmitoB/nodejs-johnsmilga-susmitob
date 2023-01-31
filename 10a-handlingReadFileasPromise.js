const { readFile } = require('fs');

const getText = function (path) {
  return new Promise((res, rej) => {
    readFile(path, 'utf8', (err, result) => {
      if (err) {
        rej(err);
        return;
      }
      res(result);
    });
  });
};

// getText('./contents/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/* 
$ using the Promise.allSettled instead of the Promise.all
$ Promise.all - we will get the value of the only failing promise so we will miss what happens to the other Promises in the array
$ Promise.allSettled - we will get the value for all the promise passed in the either resolved or rejected
*/

// $ Promise.all
Promise.all([getText('./contents/first.txt'), getText('./contents/second.txt'), getText('./contents/wrongFile.txt')])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// $ Promise.allSettled
Promise.allSettled([getText('./contents/first.txt'), getText('./contents/second.txt'), getText('./contents/wrongFile.txt')])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// $ async await approach
const getTheValues = async () => {
  try {
    const first = await getText('./contents/first.txt');
    const second = await getText('./contents/second.txt');
    console.log({ first, second });
  } catch (error) {
    console.log(error);
  }
};

getTheValues();
