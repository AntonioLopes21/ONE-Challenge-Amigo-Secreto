//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const campoAdicionarNome = document.getElementById('amigo');
const campoListaAmigos = document.getElementById('listaAmigos')
const divAmigoSorteado = document.querySelector('.nome_sorteado')
let quantidadeNomes;
let numeroDeVezesJogando = 0;
let campoDoNome;
let listaAmigos = [];
let listaAmigosSorteados = [];

function adicionarAmigo() {
    campoDoNome = campoAdicionarNome.value;
    campoAdicionarNome.classList.add('add-name')

    if (campoDoNome.length < 3 || campoDoNome.length == 0 || /\d/.test(campoDoNome)) {
        campoAdicionarNome.setAttribute('placeholder', 'O campo não pode ser vazio ou menor que 3 dígitos.');
        alert("O campo não pode ser vazio ou menor que 3 dígitos e não pode conter números.")

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
        //limpando a lista após todos serem sorteados
        campoAdicionarNome.value = ''
        campoListaAmigos.innerHTML = listaAmigos;
        divAmigoSorteado.innerHTML = '';
    } else {
        nomeSalvo = gerarNomeAleatorio(listaAmigos)
        divAmigoSorteado.innerHTML = `O amigo sorteado foi: ${nomeSalvo}`
        indice = listaAmigos.indexOf(nomeSalvo)
    }

    if(listaAmigos.includes(nomeSalvo)) {
        listaAmigos.splice(indice, 1)
        console.log(`lista de amigos\n${listaAmigos}`)

    }
    numeroDeVezesJogando ++
}

function gerarNomeAleatorio(nomeAleatorio) {
    let index = Math.floor(Math.random() * listaAmigos.length)
    
    return nomeAleatorio[index];
}