const prompt = require("prompt-sync")();

const listaDeCompras = {};

function adicionarNaLista() {
    const resposta = prompt("Deseja adicionar uma comida na lista de compras ou remover um item? (adicionar/remover/sair)");

    if (resposta.toLowerCase() === "adicionar") {
        const comida = prompt("Digite o nome da comida:");
        const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, etc.)");

        // Adiciona a comida à lista na categoria correspondente
        if (!listaDeCompras[categoria]) {
            listaDeCompras[categoria] = [comida];
        } else {
            listaDeCompras[categoria].push(comida);
        }

        adicionarNaLista(); // Chama recursivamente para adicionar mais itens
    } else if (resposta.toLowerCase() === "remover") {
        if (Object.keys(listaDeCompras).length === 0) {
            console.log("A lista de compras está vazia. Não há itens para remover.");
            adicionarNaLista();
            return;
        }

        exibirLista();
        const itemRemover = prompt("Digite o nome do item que deseja remover:");

        if (removerDaLista(itemRemover)) {
            console.log(`${itemRemover} removido da lista.`);
        } else {
            console.log(`Não foi possível encontrar ${itemRemover} na lista.`);
        }

        adicionarNaLista(); // Retorna ao ciclo inicial de perguntas
    } else if (resposta.toLowerCase() === "sair") {
        exibirLista();
    } else {
        console.log("Opção inválida. Por favor, escolha 'adicionar', 'remover' ou 'sair'.");
        adicionarNaLista();
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

function removerDaLista(item) {
    for (const categoria in listaDeCompras) {
        const index = listaDeCompras[categoria].indexOf(item);
        if (index !== -1) {
            listaDeCompras[categoria].splice(index, 1);
            return true;
        }
    }
    return false;
}

// Inicia o processo de adição/remoção à lista
adicionarNaLista();
