const express = require("express");
const {
  getAllTasks,
  getASingalTask,
  createATask,
  updateATask,
  deleteATask,
} = require("../controllers/tasksController");
const isValidMongoId = require("../middleware/isValidMongoId");

const router = express.Router();

// get all tasks
router.get("/:workspaceId/tasks", getAllTasks);

//get a single task
router.get("/:workspaceId/tasks/:id", isValidMongoId, getASingalTask);

//create a task
router.post("/:workspaceId/tasks", createATask);

//update a task
router.patch("/:workspaceId/tasks/:id", isValidMongoId, updateATask);

//delete a task
router.delete("/:workspaceId/tasks/:id", isValidMongoId, deleteATask);

module.exports = router;
