const Answer = require("../models/Answer");
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

// desc      Update Student Score
// route     PUT /api/students/:id
exports.updateStudentScore = async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);

    if (!student) {
      return next(
        new ErrorResponse(`The Student with id ${req.params.id} Not Found`, 404)
      );
    }
    const answer = await Answer.findById(req.body.answerId);
    if (!answer) {
      return;
    }

    if (answer.correct) {
      //   student = await Student.findOneAndUpdate(
      //     req.params.id,
      //     {
      //       $inc: {
      //         score: 10,
      //       },
      //     },
      //     { new: true, runValidators: true }
      //   );

      student = await Student.findOne({ _id: req.params.id });
      student.score += 10;
      await student
        .save()
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          next(
            new ErrorResponse(`score must be between min 0 and max 50`, 400)
          );
        });
    }
  } catch (e) {
    next(new ErrorResponse(`${e.message}`, 404));
  }
};
