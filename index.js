require("dotenv").config();
const routes = require("./routes/routes");

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.on("connected", (error) => {
  console.log("Database is Connected");
});

app.use(express.json());

app.listen(3000, () => {
  console.log("Server Started at ${3000}");
});

app.use("/api", routes);
//all endpoints start from API
