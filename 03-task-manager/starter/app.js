// require('./db/connect'); // $ we don't to import and execute as while this line is executed the whole connect.js file itself will be executed
const NotFound = require('./middlewere/NotFound');
const express = require('express');
require('dotenv').config();

const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');
const ErrorHandlerMiddlewere = require('./middlewere/ErrorHandlerMiddlewere');
const app = express();
const { PORT = 5000, MONGO_URI = '' } = process?.env || {};

// $ routes
/*
 * api.get('/api/v1/tasks')          - get all the tasks
 * api.post('/api/v1/tasks')         - create a new task
 * api.get('/api/v1/tasks/:id')      - get single task
 * api.patch('/api/v1/tasks/:id')    - update task
 * api.delete('/api/v1/tasks/:id')   - delete task
 */

const start = async () => {
  try {
    // *first make connection to the database and if that is successful then go and start the server
    await connectDB(MONGO_URI);
    app.listen(PORT, console.log(`listening at port ${PORT}!`));
  } catch (err) {
    console.log(err);
  }
};
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);
app.use(NotFound);
app.use(ErrorHandlerMiddlewere);

start();
