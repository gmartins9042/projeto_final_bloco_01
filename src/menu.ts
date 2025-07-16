import readlineSync from 'readline-sync';
import { Jogo } from './model/Jogo';
import { ProdutoController } from './controller/ProdutoController';

const produtoController = new ProdutoController();
let opcao: number;

do {
    console.log("\n===============================");
    console.log("🎮  Bem-vindo à Loja de Jogos");
    console.log("===============================\n");
    console.log("1 - Cadastrar novo jogo");
    console.log("2 - Listar jogos");
    console.log("3 - Atualizar jogo");
    console.log("4 - Remover jogo");
    console.log("0 - Sair");

    opcao = parseInt(readlineSync.question("\nEscolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("\n📥 Cadastro de Jogo");
            const titulo = readlineSync.question("Título: ").trim();
            const preco = parseFloat(readlineSync.question("Preço (ex: 59.90): "));
            const genero = readlineSync.question("Gênero: ").trim();

            if (!titulo || isNaN(preco) || !genero) {
                console.log("❌ Dados inválidos. Tente novamente.");
                break;
            }

            const novoJogo = new Jogo(0, titulo, preco, genero);
            produtoController.cadastrar(novoJogo);
            break;

        case 2:
            console.log("\n📋 Lista de Jogos Cadastrados");
            produtoController.listarTodos();
            break;

        case 3:
            console.log("\n✏️ Atualizar Jogo");
            const idAtualizar = parseInt(readlineSync.question("ID do jogo: "));
            const jogoExistente = produtoController.buscarPorId(idAtualizar);

            if (jogoExistente) {
                const novoTitulo = readlineSync.question("Novo título: ").trim();
                const novoPreco = parseFloat(readlineSync.question("Novo preço: "));
                const novoGenero = readlineSync.question("Novo gênero: ").trim();

                const jogoAtualizado = new Jogo(idAtualizar, novoTitulo, novoPreco, novoGenero);
                produtoController.atualizar(jogoAtualizado);
            } else {
                console.log("❌ Jogo com esse ID não foi encontrado.");
            }
            break;

        case 4:
            console.log("\n🗑️ Remover Jogo");
            const idDeletar = parseInt(readlineSync.question("ID do jogo: "));
            produtoController.deletar(idDeletar);
            break;

        case 0:
            console.log("\n👋 Encerrando... Até logo!");
            break;

        default:
            console.log("⚠️ Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
