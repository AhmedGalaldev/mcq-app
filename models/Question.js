const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    maxlength: [500, "Question can not be more than 50 characters."],
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
