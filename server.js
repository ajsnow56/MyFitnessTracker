// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const route = require("./public/api.js");
// const exercise = require("./public/exercise.js");
// const stats = require("./public/stats.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
