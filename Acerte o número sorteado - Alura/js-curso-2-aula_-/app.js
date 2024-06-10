let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'escolha um número entre 1 e 10'
*/

function exibirTextiNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} )
}

function exibirMensagemInicial(){
    exibirTextiNaTela('h1', 'Jogo do número secreto')
    exibirTextiNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial()


function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        exibirTextiNaTela('h1','Você acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tantiva'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextiNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextiNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextiNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}