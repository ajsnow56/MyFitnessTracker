const WorkModel = require("../models/workoutmodel.js");
const path = require("path");

module.exports = function (app) {

app.get("/api/workouts", (req, res) => {
  WorkModel.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        }) 
});


app.post("/api/workouts", (req, res) => {
    WorkModel.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
})

app.put("/api/workouts/:id", (req, res) => {
    WorkModel.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body} },
      {new: true, runValidators: true }
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  WorkModel.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
  .sort({ day: -1 })
  .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout.reverse());
      })
      .catch(err => {
        res.json(err);
      });    
});
};
