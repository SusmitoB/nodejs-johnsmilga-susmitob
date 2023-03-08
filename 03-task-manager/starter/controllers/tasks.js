const Task = require('../models/Task');
const AsyncWrapper = require('../middlewere/AsyncWrapper');
const { createCustomError } = require('../errors/customError');

// const createTask = async (req, res, next) => {
//   try {
//     const task = await Task.create(req?.body);
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   if (next) next();
// };
const getAllTasks = AsyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req?.body);
  res.status(201).json(task);
});

const getTask = AsyncWrapper(async (req, res, next) => {
  const { id } = req?.params;
  // * we can use the findOne as well
  const task = await Task.findById(id);
  if (!task || (Object.keys(task).length && Object.keys(task).length < 1)) {
    return next(createCustomError(`Sorry we don't have any records for the id ${id}!`, 404));
    // return res.status(404).json({ error: `Sorry we don't have any records for the id ${id}!` });
  }
  res.status(200).json({ task });
});

const updateTask = AsyncWrapper(async (req, res) => {
  const { id } = req?.params;
  const { name, completed } = req?.body;

  // * if we do not pass the { new: true }, we will recieve the previous data even after the successfull api call
  const task = await Task.findOneAndUpdate({ _id: id }, { name, completed }, { new: true, runValidators: true });
  if (!task) return next(createCustomError(`Sorry we don't have any records for the id ${id}!`, 404));
  res.status(200).json({ task });
});

const deleteTask = AsyncWrapper(async (req, res) => {
  const { id } = req?.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task || (Object.keys(task).length && Object.keys(task).length < 1)) {
    return next(createCustomError(`Sorry we don't have any records for the id ${id}!`, 404));
    // return res.status(404).json({ error: `Sorry we don't have any records for the id ${id}!` });
  }
  res.status(200).json({ removedTask: task, success: true });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
