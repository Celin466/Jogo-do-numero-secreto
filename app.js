let listaDosNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
  let chute = document.querySelector('input').value;


  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentiva';
    let mensagemTentativa = `Você descobriu com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function MensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto!!');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

MensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosNaLista = listaDosNumeros.length;

  if (quantidadeDeNumerosNaLista == numeroLimite) {
    listaDosNumeros = []
  }

  if (listaDosNumeros.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDosNumeros.push(numeroEscolhido);
    console.log(listaDosNumeros)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = ' ';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  MensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}


let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')