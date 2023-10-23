const Task = require("../models/taskModel");

//
/**
 * @description get all the tasks
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAllTasks = async (req, res) => {
  const workspace_id = req.params.workspaceId;
  const task = await Task.find({ workspace_id }).sort({ createdAt: -1 });
  res.status(200).json(task);
};

/**
 * @description get a single task from id
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getASingalTask = async (req, res) => {
  const { id: _id, workspaceId: workspace_id } = req.params;

  const task = await Task.findOne({ _id, workspace_id });

  if (!task) {
    return res
      .status(400)
      .json({ error: "There is no susch task in the database" });
  }

  res.status(200).json(task);
};

/**
 * @description create a new task
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createATask = async (req, res) => {
  const workspace_id = req.params.workspaceId;
  const { title, description } = req.body;

  try {
    const user_id = req.user._id;
    const task = await Task.create({
      title,
      description,
      workspace_id,
      user_id,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @description upadate a task
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateATask = async (req, res) => {
  const { id: _id, workspaceId: workspace_id } = req.params;
  const task = await Task.findOneAndUpdate(
    { _id, workspace_id },
    { ...req.body }
  );

  if (!task) {
    return res
      .status(400)
      .json({ error: "This document was not able to be Updated" });
  }

  res.status(200).json(task);
};

//delete a task
const deleteATask = async (req, res) => {
  const { id: _id, workspaceId: workspace_id } = req.params;

  const task = await Task.findOneAndDelete({ _id, workspace_id });

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
