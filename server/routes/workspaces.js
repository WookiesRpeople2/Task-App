const express = require("express");
const {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaceController");
const isValidMongoId = require("../middleware/isValidMongoId");
const requireWorkspace = require("../middleware/requireWorkspace");
const tasks = require("./tasks");

const router = express.Router();

router.use("/workspacetasks", tasks);

router.get("/", getWorkspaces);

router.get("/:id", isValidMongoId, requireWorkspace, getWorkspace);

router.post("/", createWorkspace);

router.delete("/:id", isValidMongoId, requireWorkspace, deleteWorkspace);

module.exports = router;
