var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/quizResultado/:nome", function (req, res) {
    quizController.quizResultado(req, res);
});

module.exports = router;