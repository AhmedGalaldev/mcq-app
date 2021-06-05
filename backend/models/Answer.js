const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [500, "Answer can not be more than 500 characters."],
  },
  correct: {
    type: Boolean,
    default: false,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
});

module.exports = mongoose.model("Answer", AnswerSchema);
