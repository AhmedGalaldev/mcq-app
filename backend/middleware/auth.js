const Student = require("../models/Student");
const ErrorResponse = require("../utils/errorResponse");

const auth = async (req, res, next) => {
  try {
    const student = await Student.findOne({ name: req.query.name });
    if (!student) {
      return next(
        new ErrorResponse(`Not found student with name ${req.query.name}`, 404)
      );
    }

    next();
  } catch (err) {
    return next(
      new ErrorResponse(`Not found student with name ${req.query.name}`, 404)
    );
  }
};

module.exports = auth;
