const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Cardio or Resistance",
          },
          name: {
            type: String,
            trim: true,
            required: "Enter exercise name",
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes",
          },
          reps: {
              type: Number,
              required: "Enter number of reps for excercise",
            },
        sets: {
             type: Number,
            required: "Enter number of sets for excercise",
            },
        weight: {
            type: Number,
            required: "Enter an exercise weight",
            },
        },
      ],
    });

const WorkModel = mongoose.model("Example", WorkoutSchema);

module.exports = WorkModel;