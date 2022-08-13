interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(){
    return {
        nome:'Cristiano',
        email: 'cristianodaniel@gmail.com'
    }
}
function setUser(usuario: Usuario){
    //...
}