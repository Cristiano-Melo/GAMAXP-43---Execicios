//GERAL 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#2E948A';

// GERAL 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');

//HOME 1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
// function centraliza(centra){
let intro = document.getElementById("introducao").style.alignContent = "center";
console.log(intro);
// intro.style.alignContent('center') = centra;
// }
// HOME 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";


// 5 -o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
let linkPosts = document.querySelector('#todos_posts');

linkPosts.setAttribute('href',`blog.html`)