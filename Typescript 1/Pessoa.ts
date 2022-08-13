export class Pessoa {
    nome: string;
    idade: number;
    cidade: string;
    estado: string;

    constructor ( nome: string, idade: number, cidade: string, estado: string){
        this.nome= nome;
        this.idade = idade;
        this.cidade = cidade;
        this.estado = estado
    }
    apresentar(){
        console.log(`Olá mundo! Meu nome é ${this.nome}, tenho ${this.idade} anos e sou de ${this.cidade} - ${this.estado}`);    
    }
}