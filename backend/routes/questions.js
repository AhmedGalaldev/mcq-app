const express = require("express");
const router = express.Router();

const { getQuestions } = require("../controllers/questions");
const auth = require("../middleware/auth");

//auth
router.route("/").get(getQuestions);

module.exports = router;
