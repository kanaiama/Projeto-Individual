create database wilProj;
use wilProj;

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
descricao varchar(300)
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