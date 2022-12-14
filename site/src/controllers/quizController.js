var quizModel = require("../models/quizModel");

function quizResultado(req, res) {
    var nome = req.params.nome
    quizModel.quizResultado(nome)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function registro(req, res) {
    var usuario = req.body.usuario
    var cont = req.body.cont
    quizModel.registro(usuario, cont)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function ranking(req, res) {
    quizModel.ranking()
    .then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    quizResultado,
    registro,
    ranking
}