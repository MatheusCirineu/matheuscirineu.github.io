var listaJogadores = [];

var elementoTabela = document.getElementById("listaJogadores");

function adicionarJogador() {
  var novoJogador = document.getElementById("nomeDoJogador").value
  listaJogadores.push({
    nome: novoJogador,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  document.getElementById("nomeDoJogador").value = "";
  exibirNaTela();
}

function exibirNaTela(Jogador) {
  elementoTabela.innerHTML = "";
 for (var i = 0; i < listaJogadores.length; i++) {
    elementoTabela.innerHTML =
      elementoTabela.innerHTML +
      `
        <tr>
            <td>${listaJogadores[i].nome}</td>
            <td>${listaJogadores[i].jogos}</td>
            <td>${listaJogadores[i].vitorias}</td>
            <td>${listaJogadores[i].empates}</td>
            <td>${listaJogadores[i].derrotas}</td>
            <td>${listaJogadores[i].pontos}</td>
            <td><button 
            onClick="adicionarVitoria(${i})" class="win">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})" class="tie">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})" class="defeat">Derrota</button></td>
       </tr>
    `;
  }
}

function adicionarVitoria(jogador) {
  listaJogadores[jogador].vitorias++;
  listaJogadores[jogador].jogos++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;
  exibirNaTela();
}

 function adicionarEmpate(jogador) {
  listaJogadores[jogador].empates++;
    listaJogadores[jogador].games++;
  listaJogadores[jogador].pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  listaJogadores[jogador].derrotas++;
  listaJogadores[jogador].jogos++;
  exibirNaTela();
}

function reiniciarPontuação() {
  listaJogadores.forEach(function (jogador) {
    jogador.jogos = 0;
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = 0;
  });
  exibirNaTela();
}
function removerJogador(jogador) {
  var removerJogador = prompt("Insira o nome do jogador que será removido:");
  var colocacao = -1;
  for (var i in listaJogadores) {
    if (removerJogador == listaJogadores[i].nome) {
      colocacao = i;
    }
  }
  if (colocacao != -1) {
    listaJogadores.splice(colocacao, 1);
    reset();
    exibirNaTela();
  } else {
    alert(
      "Nome de jogador não encontrado. Verifique se escreveu o nome corretamente!"
    );
  }
}

//Definir Vencedor
function finalizarJogo(jogador) {
  var nomeJogadorVencedor = "";
  var elementoVencedor = 
  document.getElementById("finalizarJogo");
  var numeroPontuacao = 0;
  var numeroVencedores = 0;

  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos > numeroPontuacao) {
      nomeJogadorVencedor = listaJogadores[i].nome;
      numeroPontuacao = listaJogadores[i].pontos;
      var colocacao = i;
    }
  }

  for (var i in listaJogadores) {
    if (listaJogadores[i].pontos == numeroPontuacao) {
      numeroVencedores++;
    }
  }

  if (numeroVencedores > 1) {
    elementoVencedor.innerHTML = `
    <h3>Parece que houve um empate entre ${numeroVencedores} jogadores, com um total de ${numeroPontuacao} pontos cada um.</h3>
    <h2>Parabéns aos vencedores!!</h2>
    `;
  } else {
    elementoVencedor.innerHTML = ` 
      <h2>Nosso vencedor é: ${nomeJogadorVencedor}, com ${numeroPontuacao} pontos!!</h2>
      <h3>Parabéns ${nomeJogadorVencedor}, você ganhou com ${listaJogadores[colocacao].vitorias} vitórias, ${listaJogadores[colocacao].empates} empates, ${listaJogadores[colocacao].derrotas} derrotas.</h3>
      `;
  }
}

//Reset do Jogo
function reset(jogador) {
  for (var i in listaJogadores) {
     listaJogadores[i].jogos = 0;
     listaJogadores[i].vitorias = 0;
     listaJogadores[i].empates = 0;
     listaJogadores[i].derrotas = 0;
     listaJogadores[i].pontos = 0;
  }
  var elementoVencedor = document.getElementById("finalizarJogo");
  elementoVencedor.innerHTML = ``;
  exibirNaTela();
}
