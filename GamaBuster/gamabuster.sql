INSERT INTO cliente VALUES 
	(null, 'Amanda Hammes', '0719375991', '47-99999-9999', 'amanda@gmail.com', '30/01/1990'),
    (null, 'Cristiano Melo', '0000000001', '31-99999-9993', 'cristiano@gmail.com', '01/10/1989');
select * from cliente
INSERT INTO genero VALUES
	(null, 'acao', 'filmes com lutas, quebraceira e armas'),
    (null, 'documentario', 'filmes sobre a realidade da vida'),
    (null, 'animacao', 'filmes legais não reais com desenhos'),
    (null, 'terror', 'filmes pra fazer qualquer um se arrepiar de medo'),
    (null, 'aventura', 'filmes onde os mocinhos vão explorar o mundo e encontram vilões');
    
select * from genero

INSERT INTO endereco VALUES
	(null, 'joao pessoa', '100', 'ap2', '89000-000', 'america', 'joinville', 'sc', 1), 
    (null, '15 de novembro', 's/n', '', '89000-001', 'fidelis', 'sao paulo', 'sp', 2);
    
select * from endereco

insert into filme values

(null, 'Senhor dos Anéis', '140', '2002'),
(null, 'Matrix', '120', '2002'),
(null, 'O Máscara', '80', '1999'),
(null, 'Uma linda Mulher', '95', '1990'),
(null, 'Jason', '70', '1998', '1995');

select * from filme

insert into reserva values
	(null, 's', '5,00', '10,00', '0,00', '1');
    
select * from filme_has_genero

alter table reserva add column
data_reserva date not null after idreserva;

