const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();

// $ routes
/*
 * api.get('/api/v1/tasks')          - get all the tasks
 * api.post('/api/v1/tasks')         - create a new task
 * api.get('/api/v1/tasks/:id')      - get single task
 * api.patch('/api/v1/tasks/:id')    - update task
 * api.delete('/api/v1/tasks/:id')   - delete task
 */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);
app.use(express.static('./public'));
app.listen(5000, () => {
  console.log('listening at port 5000!');
});
