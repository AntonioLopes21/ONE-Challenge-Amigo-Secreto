//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const campoAdicionarNome = document.getElementById('amigo');
const campoListaAmigos = document.getElementById('listaAmigos')
const divAmigoSorteado = document.querySelector('.nome_sorteado')
let quantidadeNomes;

let listaAmigos = [];
let listaAmigosSorteados = [];

function adicionarAmigo() {
    let campoDoNome = campoAdicionarNome.value;

    if (campoDoNome.length < 3 || campoDoNome.length == 0) {
        //alert("O campo não pode ter menos que 3 dígitos")
        campoAdicionarNome.classList.add('add-name')
        campoAdicionarNome.setAttribute('placeholder', 'O campo não pode ser vazio ou menor que 3 dígitos.');

    } else {
        listaAmigos.push(campoAdicionarNome.value)
        //console.log(listaAmigos)
        campoListaAmigos.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('') 
    }
}

function sortearAmigo() {
    let nomeSalvo;
    let indice;

    if (listaAmigos.length == 0) {
        alert('Todos os amigos foram sorteados! Adicione novos nomes.')
        listaAmigos = []
    } else {
        nomeSalvo = gerarNomeAleatorio(listaAmigos)
        divAmigoSorteado.innerHTML = `O amigo sorteado foi: ${nomeSalvo}`
        indice = listaAmigos.indexOf(nomeSalvo)
    }

    if(listaAmigos.includes(nomeSalvo)) {
        listaAmigos.splice(indice, 1)
        console.log(`lista de amigos\n${listaAmigos}`)

    }
}

function gerarNomeAleatorio(nomeAleatorio) {
    let index = Math.floor(Math.random() * listaAmigos.length)
    
    return nomeAleatorio[index];
}