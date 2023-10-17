const express = require("express");
const {
  getAllTasks,
  getASingalTask,
  createATask,
  updateATask,
  deleteATask,
} = require("../controllers/tasksController");

const router = express.Router();

// get all tasks
router.get("/", getAllTasks);

//get a single task
router.get("/:id", getASingalTask);

//create a task
router.post("/", createATask);

//update a task
router.patch("/:id", updateATask);

//delete a task
router.delete("/:id", deleteATask);

module.exports = router;
