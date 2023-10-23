const Workspace = require("../models/workspaceModel");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getWorkspaces = async (req, res) => {
  const user_id = req.user._id;
  const workspaces = await Workspace.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(workspaces);
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getWorkspace = async (req, res) => {
  res.status(200).json(req.workspace);
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createWorkspace = async (req, res) => {
  const { name } = req.body;

  try {
    const user_id = req.user._id;
    const workspace = await Workspace.create({ name, user_id });
    res.status(200).json(workspace);
  } catch (e) {
    res.status(400).json("Please sign in");
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const deleteWorkspace = async (req, res) => {
  try {
    const workspace = await req.workspace.deleteOne();
    res.status(200).json(workspace);
  } catch (e) {
    res.status(400).json("this workspace can not be deleted");
  }
};

module.exports = {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  deleteWorkspace,
};
