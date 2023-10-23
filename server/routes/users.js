const express = require("express");
const { signup, login, userUpdate } = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");
const zodAuth = require("../middleware/zodAuth");
const router = express.Router();

//login
router.post("/login", zodAuth, login);

//sign up
router.post("/signup", zodAuth, signup);

//update a user
router.patch("/edit", requireAuth, userUpdate);

module.exports = router;
