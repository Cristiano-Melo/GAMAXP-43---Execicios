// DECLARANDO UMA VARIAVEL ARRAY COM CONTEUDO DENTRO

var listaReceitas = ["Receita1","Receita2","Receita3","Receita4","Receita5"];

// ADICIONANDO UM ITEM AO FINAL ARRAY

listaReceitas.push("Receita 10");

// ADICIONANDO UM ITEM AO INICIO DO ARRAY

listaReceitas.unshift(Receita6);

// ADICIONANDO UM ITEM EM UMA POSIÇÃO ESPECÍFICA AO ARRAY

listaReceitas.splice(2, 0, "Receita7");

//SOBREESCREVENDO UM ITEM DO ARRAY

listaReceitas[2] = "Receita6"

//DELETANDO O ULTIMO ITEM DO ARRAY
listaReceitas.pop()

// DELETANDO O PRIMEIRO ITEM DO ARRAY

listaReceitas.shift()

//


listaReceitas.map(receita =>{
    console.log(receita)
})

console.log("O Tamando do Array é: ",listaReceitas.length);
