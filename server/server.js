require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const user = require("./routes/users");
const workspaces = require("./routes/workspaces");
const requireAuth = require("./middleware/requireAuth");

const app = express();
app.use(express.json());

//cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//middleware to see routs
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//use the routes
app.use("/api/workspaces", requireAuth, workspaces);
app.use("/api/user", user);

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      "server is up and running and connected to the DB on port 4000"
    );
  });
});
