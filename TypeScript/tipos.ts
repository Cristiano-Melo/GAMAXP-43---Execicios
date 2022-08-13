// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Vitor Farias';

// Array

const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Vitor', 3, true]

//Enum

enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any

const retornoDaAPI: any[] = [123, 'Vitor', false];
const retornoDaAPI2: any = {
    // ...
};

//Void

function printarNaTela(msg: string):void{
    console.log(msg);   
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar (objecto:object){
    // ... 
}
criar({
    propriedade:1,
})
//criar('Vitor') //Dá erro

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem:string): never{
    throw new Error(mensagem);
}
function falha(){
    return erro('Algo falhou');
}

//Union Types
const nota: string | number = 5;
function exibirNota(nota:number | string){
    console.log(`A nota é ${nota}`);    
}

exibirNota('10');
exibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
// type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
    },
    {
    nome: 'Cristiano',
    sobrenome: 'Melo',
    dataNascimento: new Date()
}]

function tratatFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ', funcionario.nome);
        
    }
    // ... 
};

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome:string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'Vitor',
    telefone1: '123456789',
}

//Type Assertion
const minhaIdade:any = 23;
(minhaIdade as number).toString();
(<number>minhaIdade).toString();

// const imput = document.getElementById('numero1') as HTMLInputElement;
const imput = <HTMLInputElement>document.getElementById('numero1');
console.log(imput.value);

