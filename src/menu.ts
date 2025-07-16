import readlineSync from 'readline-sync';
import { Jogo } from './model/Jogo';
import { ProdutoController } from './controller/ProdutoController';

const produtoController = new ProdutoController();
let opcao: number;

do {
    console.log("___________________________");
    console.log("\n===== LOJA DE JOGOS =====");
    console.log("___________________________\n");
    console.log("Menu de Opções:");
    console.log("___________________________");
    console.log("|1 - Cadastrar Jogo");
    console.log("|2 - Listar Jogos");
    console.log("|3 - Atualizar Jogo");
    console.log("|4 - Deletar Jogo");
    console.log("|0 - Sair");

    opcao = parseInt(readlineSync.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            console.log("\n--- Cadastrar Jogo ---");
            const titulo = readlineSync.question("Titulo: ");
            const preco = parseFloat(readlineSync.question("Preco: "));
            const genero = readlineSync.question("Genero: ");
            const novoJogo = new Jogo(0, titulo, preco, genero);
            produtoController.cadastrar(novoJogo);
            break;

        case 2:
            console.log("\n--- Lista de Jogos ---");
            produtoController.listarTodos();
            break;

        case 3:
            console.log("\n--- Atualizar Jogo ---");
            const idAtualizar = parseInt(readlineSync.question("ID do jogo: "));
            const jogoExistente = produtoController['produtos'].find(p => p.id === idAtualizar);

            if (jogoExistente) {
                const novoTitulo = readlineSync.question("Novo título: ");
                const novoPreco = parseFloat(readlineSync.question("Novo preço: "));
                const novoGenero = readlineSync.question("Novo gênero: ");

                const jogoAtualizado = new Jogo(idAtualizar, novoTitulo, novoPreco, novoGenero);
                produtoController.atualizar(jogoAtualizado);
            } else {
                console.log("❌ Jogo não encontrado.");
            }
            break;

        case 4:
            console.log("\n--- Deletar Jogo ---");
            const idDeletar = parseInt(readlineSync.question("ID do jogo: "));
            const jogoParaDeletar = produtoController['produtos'].find(p => p.id === idDeletar);

            if (jogoParaDeletar) {
                produtoController.deletar(idDeletar);
            } else {
                console.log("❌ Jogo não encontrado.");
            }
            break;

        case 0:
            console.log("Encerrando o sistema...");
            break;

        default:
            console.log("Opção invalida.");
    }
} while (opcao !== 0);
