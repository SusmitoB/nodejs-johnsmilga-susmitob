const express = require('express');
// const path = require('path');
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log('express server is up on port 5000!');
});

// * wow just move your assets to this path and relax!
// * setup static and middleware
app.use(express.static('./public'));

// $ we can ignore this and move the index.html to the ./public as index.html is static asset too
/*
! This will work fine but why you need to write this extra lines of code when you can simply go and keep static files in the public folder and setup static using app.use(express) [SSR]
app.get('/', (req, res) => {
  * if we use only use the sendFile and give the relative path of the file then error is thrown as we must pass the absolute path and the absolute path comes from the path module or mention the exact path manually. It is better to use path.resolve because we never know in which machine our server will be run in future
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
*/
