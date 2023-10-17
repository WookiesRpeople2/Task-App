require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");
const user = require("./routes/uers");
const requireAuth = require("./middleware/requireAuth");

const app = express();
app.use(express.json());

//middleware to see routs
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//use the routes
app.use("/api/tasks", requireAuth, tasks);
app.use("/api/user", user);

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      "server is up and running and connected to the DB on port 4000"
    );
  });
});
