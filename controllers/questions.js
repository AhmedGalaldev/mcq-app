const Answer = require("../models/Answer");
const Question = require("../models/Question");
const ErrorResponse = require("../utils/errorResponse");

// desc      Get Questions
// route     GET /api/questions
exports.getQuestions = async (req, res, next) => {
  //   Question.find({}).aggregate([{ $sample: { size: 5 } }]);
  // .populate("answers")
  // .exec(function (error, result) {
  //   res.status(200).json(result);
  // });
  //   console.log(await Question.find({}));
  Question.getRandomItems(5, function (err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};
