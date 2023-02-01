const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/*
 * first we write the 'on' then the 'emit'
 * we can pass the arguments from emit
 * some modules in node use the EvenEmitter under the hood, eg.- http module.
 */

customEmitter.on('response', () => {
  console.log('data recieved');
});
customEmitter.on('response', () => {
  console.log('Hey yo man I am also listening to the event emit!');
});

customEmitter.emit('response');

customEmitter.on('userData', ({ userName = '', age = 0, gender = '' }) => {
  console.log(`${userName} is a ${gender} and ${age} years old.`);
});

// Passing the argument from emitter
customEmitter.emit('userData', { userName: 'Susmito', age: '27', gender: 'male' });
