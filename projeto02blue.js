let end = 1;
while (end = 1) {
  console.clear();

  let prompt = require("prompt-sync")();

  console.log("Bem vindo ao JOKENPÔ. Escolha pedra, papel ou tesoura e tente vencer o computador. Boa sorte!");
  console.log();

  let respostaUsuario;
  let pontuacaoUsuario = 0;
  let pontuacaoComputador = 0;
  let empates = 0;
  let rodadas = +prompt("Quantas rodadas você deseja jogar contra o computador?: ");

  console.log();

  const jokenpo = ["pedra", "tesoura", "papel"];

  while (isNaN(rodadas)) {
    console.log("Número inválido!");
    console.log();
    rodadas = +prompt("Quantas rodadas você deseja jogar com o computador?: ");
  }

  let respostaComputador = jokenpo[Math.floor(Math.random() * 3)];

  for (i = 0; i < rodadas; i++) {
    respostaUsuario = prompt("Qual é sua jogada?: ").toLowerCase();
    while (
      respostaUsuario != "pedra" &&
      respostaUsuario != "papel" &&
      respostaUsuario != "tesoura"
    ) {
      console.log('Resposta inválida. Digite "pedra", "papel" ou "tesoura"');
      console.log();
      respostaUsuario = prompt("Qual é sua jogada?: ").toLowerCase();
    }
    console.log();
    console.log(`A sua resposta foi: ${respostaUsuario}.`);
    console.log(`A resposta do computador foi: ${respostaComputador}.`);
    console.log();

    if (respostaUsuario == "papel" && respostaComputador == "tesoura") {
      pontuacaoComputador++;
      console.log("O computador venceu esta rodada!");
      console.log();
    } else if (respostaUsuario == "papel" && respostaComputador == "pedra") {
      pontuacaoUsuario++;
      console.log("Você venceu esta rodada!");
      console.log();
    } else if (respostaUsuario == "papel" && respostaComputador == "papel") {
      ++empates;
      console.log("Deu empate!");
      console.log();
    } else if (respostaUsuario == "pedra" && respostaComputador == "tesoura") {
      pontuacaoUsuario++;
      console.log("Você venceu esta rodada!");
      console.log();
    } else if (respostaUsuario == "pedra" && respostaComputador == "pedra") {
      empates++;
      console.log("Deu empate!");
      console.log();
    } else if (respostaUsuario == "pedra" && respostaComputador == "papel") {
      pontuacaoComputador++;
      console.log("O computador venceu esta rodada!");
      console.log();
    } else if (
      respostaUsuario == "tesoura" &&
      respostaComputador == "tesoura"
    ) {
      empates++;
      console.log("Deu empate!");
      console.log();
    } else if (respostaUsuario == "tesoura" && respostaComputador == "pedra") {
      pontuacaoComputador++;
      console.log("O computador venceu esta rodada!");
      console.log();
    } else if (respostaUsuario == "tesoura" && respostaComputador == "papel") {
      pontuacaoUsuario++;
      console.log("Você venceu!");
      console.log();
    }
  }

  console.log();

  console.log(
    `Você venceu ${pontuacaoUsuario} rodada(s).\nComputador venceu ${pontuacaoComputador} rodada(s).\nEmpate em ${empates} rodada(s).`
  );
  console.log();

  if (pontuacaoComputador > pontuacaoUsuario) {
    console.log("Que pena!! O computador foi o grande campeão do JOKENPÔ!!!");
  } else if (pontuacaoComputador < pontuacaoUsuario) {
    console.log("Parabéns!! Você foi o grande campeão do JOKENPÔ!!!");
  } else if (pontuacaoComputador == pontuacaoUsuario) {
    console.log("EMPATE!! Infelizmente não houve um campeão!!!");
  }
  console.log();

  let jogarNovamente = "";
  while (jogarNovamente != "s" && jogarNovamente != "n") {
    jogarNovamente = prompt(
      'Gostaria de jogar novamente? Responda "s" para SIM e "n" para NÃO: '
    ).toLowerCase();
    if (jogarNovamente != "s" && jogarNovamente != "n") {
      console.log('Resposta inválida! responda "s" ou "n".');
    }
  }
  if (jogarNovamente == "n") {
    console.log();
    console.log("Obrigado por jogar!!!");
    break;
  }
}

console.log();