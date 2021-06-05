const express = require("express");
const router = express.Router();

const { getQuestions } = require("../controllers/questions");
const auth = require("../middleware/auth");

//auth
router.route("/").get(auth, getQuestions);

module.exports = router;
