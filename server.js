// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true, 
  useUnifiedTopology: true});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
