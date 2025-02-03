//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const campoAdicionarNome = document.getElementById('amigo');
const campoListaAmigos = document.getElementById('resultado')
let listaAmigos = []

function adicionarAmigo() {
    if(campoAdicionarNome.value == 0 || campoAdicionarNome.value < 3) {
        campoAdicionarNome.setAttribute('placeholder', 'O campo não pode ser vazio ou menor que 3 dígitos.') ;
        campoAdicionarNome.classList.add('add-name')
    } else {
        listaAmigos.push(campoAdicionarNome.value)
        campoAdicionarNome.innerHTML = listaAmigos
        //console.log(listaAmigos)
    }
}