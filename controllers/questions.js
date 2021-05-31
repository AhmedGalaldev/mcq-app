const Question = require("../models/Question");
const ErrorResponse = require("../utils/errorResponse");

// desc      Get Questions
// route     GET /api/questions
exports.getQuestions = async (req, res, next) => {
  Question.getRandomItems(5, function (err, result) {
    if (err) {
      return next(new ErrorResponse(err.message, 400));
    } else {
      res.status(200).json(result);
    }
  });
};
