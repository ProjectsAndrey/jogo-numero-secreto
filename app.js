let listaNumSorteados = [];
let limiteTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let alterarTexto = document.querySelector(tag);
    alterarTexto.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10, por favor!');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é menor');    
    }else{
        exibirTextoNaTela('p','O número secreto é maior');        
    
    }
    tentativas ++;
    limparCampo();

}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteTentativas + 1);
    let qtElementosLista = listaNumSorteados.length;

    if(qtElementosLista == limiteTentativas){
        listaNumSorteados = [];
    }

    if(listaNumSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumSorteados.push(numeroEscolhido);
        console.log(listaNumSorteados);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
}