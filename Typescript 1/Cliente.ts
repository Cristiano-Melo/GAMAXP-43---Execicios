import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa{
    assinante: boolean;

    constructor(nome:string, idade: number, estado: string, cidade: string, assinante: boolean){
        super(nome, idade, estado, cidade);
        this.assinante = assinante;
    }

    verificarAssinatura(){
        if(this.assinante){
            console.log('É assinante');
        } else {
            console.log('Não é assinante');            
        }
    }
}