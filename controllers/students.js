const Student = require("../models/Student");
const ErrorResponse = require("../utils/errorResponse");

// desc      Create new Student
// route     POST /api/students
exports.createStudent = async (req, res, next) => {
  const student = new Student({ name: req.body.name });
  try {
    await student.save();
    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    return next(new ErrorResponse(`The student is already exist`, 400));
  }
};
