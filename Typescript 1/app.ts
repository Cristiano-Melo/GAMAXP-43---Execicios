import { Pessoa } from './Pessoa';

let pessoa1 : Pessoa = new Pessoa('Cristiano Melo', 36, 'Belo Horizonte', 'Minas Gerais');
pessoa1.apresentar()

let pessoa2 : Pessoa = new Pessoa('Dayanne Souza de Morais', 35, 'Belo Horizonte', 'Minas Gerais');
pessoa2.apresentar()

console.log(`Olá mundo! Meu nome é ${pessoa1.nome}, tenho ${pessoa1.idade} anos e sou de ${pessoa1.cidade} - ${pessoa1.estado}`);

console.log(`Olá mundo! Meu nome é ${pessoa2.nome}, tenho ${pessoa2.idade} anos e sou de ${pessoa2.cidade} - ${pessoa2.estado}`);
