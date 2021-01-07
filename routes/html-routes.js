const path = require("path");
const WorkModel = require("../models/workoutmodel");

module.exports = function (app) {

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/exercise.html"))
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/stats.html"))
    });
    app.get("/", function (req, res) {
        res.sendFile(path.resolve("./public/index.html"));
      });
}
