const serverless = require("serverless-http");
const express = require("express");
const app = express();
const todoRouter = require("./routes/todo.routes");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());


// Connect to db
app.use(async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED TO DB SUCCESSFULLY");
    next();
  } catch (err) {
    next(err);
  }
});

// Routes
app.use('/todos', todoRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
