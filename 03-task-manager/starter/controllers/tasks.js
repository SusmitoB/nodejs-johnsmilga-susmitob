const Task = require('../models/Task');

const allTasks = () => {
  let data = [];
  const tasks = () => data;
  const setTasks = (value) => {
    data = value;
  };
  return [tasks, setTasks];
};
const [tasks, setTasks] = allTasks();

const getAllTasks = async (req, res, next) => {
  // console.log({ tasks: tasks() });
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
  // res.status(200).json({
  //   success: true,
  //   tasks: tasks(),
  // });
  if (next) next();
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req?.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
  // const { name } = req?.body;
  // const date = new Date();
  // const uuid = `${String(
  //   Math.floor(Math.random() * 100000000)
  // )}-${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
  // setTasks([...tasks(), { name, _id: uuid, completed: false }]);
  // res.status(201).json({
  //   success: true,
  //   msg: 'Task is added successfully!',
  // });
  if (next) next();
};

const getTask = (req, res, next) => {
  const { id } = req?.params;
  const task = tasks().find((item) => item._id === id);
  if (task) {
    return res.status(200).json({
      success: true,
      task,
    });
  }
  res.status(404).json({
    success: false,
    msg: 'Inavlid id!',
  });
  if (next) next();
};

const updateTask = (req, res, next) => {
  const { id } = req?.params;
  const { name, completed } = req?.body;
  let task = {};
  const newTasks = tasks().map((item) =>
    item._id === id
      ? (() => {
          task = { ...item };
          return { ...item, completed, name };
        })()
      : item
  );
  setTasks(newTasks);
  if (task.name !== undefined && task.completed !== undefined) {
    return res.status(200).json({
      success: true,
      task,
    });
  }
  res.status(404).json({
    success: false,
    msg: 'Inavlid id!',
  });
  if (next) next();
};

const deleteTask = (req, res, next) => {
  const { id } = req?.params;
  const allTasks = tasks();
  const indexOfTask = allTasks.findIndex((item) => item._id === id);
  if (indexOfTask >= 0) {
    allTasks.splice(indexOfTask, 1);
    setTasks(allTasks);
    return res.status(202).json({
      success: true,
      msg: 'The item has been removed!',
    });
  }
  res.status(404).json({
    success: false,
    msg: 'Inavlid id!',
  });
  if (next) next();
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
