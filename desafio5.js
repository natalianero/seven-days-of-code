const prompt = require("prompt-sync")();

const listaDeCompras = {};

function adicionarNaLista() {
    const resposta = prompt("Deseja adicionar uma comida na lista de compras? (sim/não)");

    if (resposta.toLowerCase() === "sim") {
        const comida = prompt("Digite o nome da comida:");
        const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, etc.)");

        // Adiciona a comida à lista na categoria correspondente
        if (!listaDeCompras[categoria]) {
            listaDeCompras[categoria] = [comida];
        } else {
            listaDeCompras[categoria].push(comida);
        }

        adicionarNaLista(); // Chama recursivamente para adicionar mais itens
    } else {
        exibirLista();
    }
}

function exibirLista() {
    console.log("\nLista de compras:");

    for (const categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            console.log(`  ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(", ")}`);
        }
    }
}

// Inicia o processo de adição à lista
adicionarNaLista();

