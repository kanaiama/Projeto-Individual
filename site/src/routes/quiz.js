var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/quizResultado/:nome", function (req, res) {
    quizController.quizResultado(req, res);
});

router.post("/registro", function (req, res) {
    quizController.registro(req, res);
});

router.get("/ranking", function (req, res) {
    quizController.ranking(req, res);
});

module.exports = router;