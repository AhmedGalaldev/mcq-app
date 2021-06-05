const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const {
  createStudent,
  updateStudentScore,
} = require("../controllers/students");

router.route("/").post(createStudent);
router.route("/:id").put(auth, updateStudentScore);

module.exports = router;
