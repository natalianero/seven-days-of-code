const prompt = require("prompt-sync")();

const numeroPredefinido = Math.floor(Math.random() * 11);
let tentativasRestantes = 3;

console.log("Bem-vindo ao jogo de adivinhação!");

while (tentativasRestantes > 0) {
  const chute = prompt("Digite seu chute (entre 0 e 10):");
  const numeroChutado = parseInt(chute);

  if (numeroChutado === numeroPredefinido) {
    console.log("Parabéns! Você acertou!");
    break;
  } else {
    console.log(`Ops, você errou! Tente novamente. Tentativas restantes: ${tentativasRestantes - 1}`);
    tentativasRestantes--;
  }
}

if (tentativasRestantes === 0) {
  console.log(`Você não acertou! O número correto era ${numeroPredefinido}.`);
}
