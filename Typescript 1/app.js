"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./Pessoa");
let pessoa1 = new Pessoa_1.Pessoa('Cristiano Melo', 36, 'Belo Horizonte', 'Minas Gerais');
let pessoa2 = new Pessoa_1.Pessoa('Dayanne Souza de Morais', 35, 'Belo Horizonte', 'Minas Gerais');
console.log(`Olá mundo! Meu nome é ${pessoa1.nome}, tenho ${pessoa1.idade} anos e sou de ${pessoa1.cidade} - ${pessoa1.estado}`);
console.log(`Olá mundo! Meu nome é ${pessoa2.nome}, tenho ${pessoa2.idade} anos e sou de ${pessoa2.cidade} - ${pessoa2.estado}`);
