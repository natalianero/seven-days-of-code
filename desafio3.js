const prompt = require("prompt-sync")();

console.log('Bem-vindo ao jogo de escolhas para desenvolvedores!');

// Escolha da área (Front-End ou Back-End)
const areaInput = prompt('Escolha a área desejada (1 - Front-End ou 2 - Back-End): ');
const area = parseInt(areaInput);

if (area === 1) {
  // Escolha do framework (React ou Vue) para Front-End
  const framework = prompt('Escolha o framework desejado (React ou Vue): ');

  console.log(`Ótima escolha! Você está no caminho do Front-End com ${framework}.`);

} else {
  // Escolha da linguagem (C# ou Java) para Back-End
  const language = prompt('Escolha a linguagem desejada (C# ou Java): ');

  console.log(`Excelente escolha! Você está no caminho do Back-End com ${language}.`);
}

// Especialização ou Fullstack
const specializationInput = prompt('Deseja se especializar na área escolhida (1 - sim ou 2 - não) ou se tornar Fullstack? ');
const specialization = parseInt(specializationInput);

if (specialization === 1) {
  console.log('Você escolheu se especializar. Ótimo caminho!');
} else if (specialization === 2) {
  console.log('Você escolheu se tornar Fullstack. Isso abrirá muitas oportunidades para você!');
} else {
  console.log('Opção inválida. Reinicie o jogo e escolha uma opção válida.');
}

// Escolha de tecnologias usando while
const technologies = [];
let moreTechnologies = 'sim';

while (moreTechnologies === 'sim') {
  const technology = prompt('Digite o nome da tecnologia que você gostaria de aprender: ');
  technologies.push(technology);

  moreTechnologies = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (sim/não) ');
}

console.log('Parabéns! Você escolheu as seguintes tecnologias para aprender:');

// Mostrando as tecnologias escolhidas usando for
for (let i = 0; i < technologies.length; i++) {
  console.log(`- ${technologies[i]}`);
}

console.log('Fim do jogo!');
