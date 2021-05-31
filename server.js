const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Route files
const students = require("./routes/students");
const questions = require("./routes/questions");

// load .env variables
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

// Database connection
connectDB();

// Enable CORS
app.use(cors());

// Mount routers
app.use("/api/students", students);
app.use("/api/questions", questions);

// error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
