const express = require("express");
const { signup, login, userUpdate } = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");
const zodAuth = require("../middleware/zodAuth");
const router = express.Router();

//login
router.post("/login", zodAuth, login);

//sign up
router.post("/signup", zodAuth, signup);

//show a user
// router.get("/:id");

//update a user
router.post("/edit", requireAuth, userUpdate);
module.exports = router;
