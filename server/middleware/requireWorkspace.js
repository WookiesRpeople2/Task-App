const Workspace = require("../models/workspaceModel");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const requireWorkspace = async (req, res, next) => {
  const { id: _id } = req.params;
  try {
    const workspace = await Workspace.findOne({ _id });

    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }

    req.workspace = workspace;
    next();
  } catch (e) {
    res.status(404).json("There is no such worksapce");
  }
};

module.exports = requireWorkspace;
