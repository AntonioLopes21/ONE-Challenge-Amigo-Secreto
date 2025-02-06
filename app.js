//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const campoAdicionarNome = document.getElementById('amigo');
const campoListaAmigos = document.getElementById('listaAmigos')
let listaAmigos = [];
let listaAmigosSorteados = [];

function adicionarAmigo() {
    if (campoAdicionarNome.length < 3 || campoAdicionarNome.value == 0) {
        campoAdicionarNome.setAttribute('placeholder', 'O campo não pode ser vazio ou menor que 3 dígitos.');
        campoAdicionarNome.classList.add('add-name')
    } else {
        listaAmigos.push(campoAdicionarNome.value)
        //console.log(listaAmigos)
        campoListaAmigos.innerHTML = listaAmigos 

    }
}

function sortearAmigo() {
    let quantidadeNomes = 0;
    let listaAmigosSorteados = []

    if (quantidadeNomes == listaAmigos.length) {
        alert('Todos os amigos foram sorteados! Adicione novos nomes.')
        listaAmigos = []
    } else {
        
        console.log(gerarNomeAleatorio(listaAmigos))
        quantidadeNomes ++;
    }
}

function gerarNomeAleatorio(nomeAleatorio) {
    let index = Math.floor(Math.random() * listaAmigos.length)
    
    return nomeAleatorio[index];
}