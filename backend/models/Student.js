const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    unique: [true, "the name is already exist"],
    maxlength: [50, "Name can not be more than 50 characters."],
  },
  score: {
    type: Number,
    default: 0,
    min: [0, "score min value 0"],
    max: 50,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
