const prompt = require("prompt-sync")();

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

console.log(msg);

const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// Precisa converter de string para inteiro!
const respostaNum = parseInt(resposta);

if (respostaNum === 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (respostaNum === 2) {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    console.log("Resposta inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.");
}











