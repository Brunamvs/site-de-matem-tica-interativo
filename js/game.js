// Variáveis principais do jogo let respostaCorreta;
let respostaCorreta;
let pontuacão = 0;
let modoAtual = 'basico';


// Função que inicia o jogo com o modo escolhido
function iniciarJogo (modo) {
  modoAtual = modo;
  document.getElementById ("area-jogo") .style.display = "block";
  novaPergunta ();
}
 

// Função que gera nova pergunta e mostra na tela
function novaPergunta()
      const numeros = gerarNumeros (modoAtual);
      const operacao = escolherOpe
      const perguntaTexto = '${numeros.num1} ${operacao} $ {numeros.num2}';


      respostaCorreta = calcularResposta (numeros.num1, numeros.num2,operacao);


    document.getElementById ("pergunta") .innerText = perguntaTexto;
    document.getElementById ("resposta") .value = "";
}


// Gera números aleatorios, maiores no modo desafio
function gerarNumeros (modo) {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2= Math.floor (Math.random() * 10) + 1;

  if(modo === 'desafio') }
   num *= 2;
   num *= 3;
}

   return { num1, num2 };

   }

// Escolher aleatoriamente uma operacao: +, - ou *
function escolheroperacao() {
  const operacoes = ['+', '-', '*'];
  return operacoes[math.floor(math.random() * operacoes.length)];
}
//Calcular o resultado com base nos numeros e operacoes
function calcularResposta(n1, n2, op) {
  switch (op) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
  }
}
//Verificar se a resposta do usuario esta correta
function verificarResposta() {
  const respostaUsuario = perseInt(document.getElementById("resposta").value);
  if (respostaUsuario === respostaCorreta) {
    document.getElementById("resultado").innerText = " Resposta Correta!";
    pontuacao += 10;
  } else {
    document.getElementById("resultado").innerText = ' Errado! A resposta era ${respostacorreta}';
    pontuacao -= 5;
  }
  document.getElementById(pontuacao).innerText = pontuacao;
}
