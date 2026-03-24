function iniciarJornada() {
  let nome = prompt("Digite seu nome, Cavaleiro:");
  let cosmo = +prompt("Digite seu Cosmo Inicial:");

  let sacrificio = confirm("Deseja sacrificar um sentido para aumentar seu cosmo?");
  if (sacrificio) {
    cosmo *= 2;
  }

  // Simulação das 12 casas (dano aleatório)
  for (let i = 1; i <= 12; i++) {
    let dano = Math.floor(Math.random() * 200);
    cosmo -= dano;
  }

  let statusVida = cosmo > 0 ? "Vivo" : "Morto";

  let relatorio = document.getElementById("relatorio");
  if (cosmo >= 1000 && statusVida === "Vivo") {
    relatorio.innerHTML = `🌟 Parabéns, ${nome}! Você salvou Athena com ${cosmo} de cosmo restante!`;
  } else {
    relatorio.innerHTML = `💀 ${nome}, seu cosmo foi insuficiente... Athena não foi salva.`;
  }
}
