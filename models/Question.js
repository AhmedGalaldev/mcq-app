const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      maxlength: [500, "Question can not be more than 50 characters."],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// relationship
QuestionSchema.virtual("answers", {
  ref: "Answer",
  localField: "_id",
  foreignField: "question",
});

// get random documents

QuestionSchema.statics.getRandomItems = function (itemCount, cb) {
  this.aggregate(
    [
      {
        $sample: { size: 10 },
      },
      {
        $group: {
          _id: "$_id",
          question: { $push: "$$ROOT" },
        },
      },
      {
        $limit: itemCount,
      },
      {
        $unwind: "$question",
      },
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "question",
          as: "answers",
        },
      },
      {
        $project: {
          _id: 1,
          "question.name": 1,
          "answers.name": 1,
          "answers._id": 1,
        },
      },
    ],
    cb
  );
};

module.exports = mongoose.model("Question", QuestionSchema);
