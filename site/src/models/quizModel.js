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

function registro(usuario, cont) {

    var instrucao = `
       insert into quiz values 
       (null, ${usuario}, ${cont})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ranking() {

    var instrucao = `
        select count(fkPersonagem) 'Personagem' from quiz 
        group by fkPersonagem
            order by fkPersonagem asc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    quizResultado,
    registro,
    ranking
};