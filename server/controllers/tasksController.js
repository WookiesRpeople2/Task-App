const Task = require("../models/taskModel");
const isValidMongoId = require("../helper/isValidMongoId");

//get all the tasks
const getAllTasks = async (req, res) => {
  const task = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(task);
};

//get a single task from id
const getASingalTask = async (req, res) => {
  const { id } = req.params;
  isValidMongoId(id);

  const task = await Task.findById(id);

  if (!task) {
    res.status(400).json({ error: "There is no susch task in the database" });
  }

  res.status(200).json(task);
};

// create a new task
const createATask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//upadate a task
const updateATask = async (req, res) => {
  const { id } = req.params;

  isValidMongoId(id);

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res
      .status(400)
      .json({ error: "This document was not able to be deleted" });
  }

  res.status(200).json(task);
};

//delete a task
const deleteATask = async (req, res) => {
  const { id } = req.params;

  isValidMongoId(id);
  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res
      .status(400)
      .json({ error: "This document was not able to be deleted" });
  }

  res.status(200).json(task);
};

module.exports = {
  getAllTasks,
  getASingalTask,
  createATask,
  updateATask,
  deleteATask,
};
