create database poonda;
use poonda;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(100),
email varchar(100),
senha varchar(75)
);

create table imagem (
idImagem int primary key,
imagem mediumtext
);

create table personagem (
idPersonagem int primary key,
nome varchar(15),
descricao text,
fkImagem int,
foreign key (fkImagem) references imagem (idImagem)
);

create table quiz (
idTentativa INT primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario),
fkPersonagem int,
foreign key (fkPersonagem) references personagem (idPersonagem)
);

select * from usuario;

insert into imagem values 
	(1, 'assets/imgs/img-quiz/resultadoTai.png'),
	(2, 'assets/imgs/img-quiz/resultadoShen.png'),
	(3, 'assets/imgs/img-quiz/resultadoKai.png');
    
insert into personagem values 
	(1, 'TAI LUNG', 'Assim como Tai Lung, você consegue se adaptar fácil ao ambiente, tendo um racíocinio rápido e eficaz. Você aparenta ter traços de uma tristeza profunda oculta, sentimento de desilusão com seu destino, de potencial perdido e uma forte sensação de abandono. Esses sentimentos te fazem destruir quase tudo ao seu redor como consequência', 1),
    (2, 'LORD SHEN', 'Assim como Shen, você tem aptidão parar liderar outras pessoas, sendo que sua inteligência e criatividade é o seu forte. Contudo, você aparenta viver sua vida guiado/a pelo medo do futuro e por insegurança. Isso te faz agir por impulso, machucando pessoas ao seu redor e usando uma máscara de arrogância e superioridade pra tentar se sentir melhor.', 2),
    (3, 'KAI', 'Assim como Kai, você exala uma força de vontade incomparável e têm um controle emocional forte. Contudo, sendo determinado a conseguir tudo o que quer, tudo indica que você é carente de atenção e inveja quem tem. É ganancioso, não ficando satisfeito com o que já tem. Paranóico/a e acha que as pessoas são desleais à você, quando na real o contrário é o que mais ocorre.', 3);


select nome, descricao, imagem from imagem
	join personagem on fkImagem = idImagem
		where idPersonagem = 3;

select count(fkPersonagem) 'Personagem' from quiz 
	group by fkPersonagem
		order by fkPersonagem asc;

select * from quiz;
select * from personagem;
select * from usuario;

