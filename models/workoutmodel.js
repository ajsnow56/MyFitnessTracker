const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
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
            required: "Exercise duration in minutes",
        },
        sets: {
            type: Number,

        },
        reps: {
            type: Number,
 
        },
        weight: {
            type: Number,

        },
        distance: {
            type: Number,
        },
        },
      ],
    });

const WorkModel = mongoose.model("WorkModel", WorkoutSchema);

module.exports = WorkModel;