var database = require("../database/config")

function quizResultado(nome) {

    var instrucao = `
        select nome, descricao, imagem from imagem
	        join personagem on fkImagem = idImagem
		        where idPersonagem = ${nome};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    quizResultado
};