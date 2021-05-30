const express = require("express");
const dotenv = require("dotenv");

// load .env variables
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
