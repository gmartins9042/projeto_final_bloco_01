import readlineSync from 'readline-sync';

let opcao: number;

do {
    console.log("\n=== LOJA DE JOGOS ===");
    console.log("1 - Cadastrar Jogo");
    console.log("2 - Listar Jogos");
    console.log("3 - Atualizar Jogo");
    console.log("4 - Deletar Jogo");
    console.log("0 - Sair");
    opcao = parseInt(readlineSync.question("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            let titulo = readlineSync.question("Título: ");
            let preco = parseFloat(readlineSync.question("Preço: "));
            let genero = readlineSync.question("Gênero: ");
            console.log(`Jogo cadastrado (simulado): ${titulo}, R$${preco}, ${genero}`);
            break;

        case 2:
            console.log("Listando jogos (simulação)...");
            break;

        case 3:
            let idAtualizar = parseInt(readlineSync.question("ID do jogo a atualizar: "));
            let novoTitulo = readlineSync.question("Novo título: ");
            let novoPreco = parseFloat(readlineSync.question("Novo preço: "));
            let novoGenero = readlineSync.question("Novo gênero: ");
            console.log(`Jogo atualizado (simulado): ID ${idAtualizar}, ${novoTitulo}, R$${novoPreco}, ${novoGenero}`);
            break;

        case 4:
            let idDeletar = parseInt(readlineSync.question("ID do jogo a deletar: "));
            console.log(`Jogo com ID ${idDeletar} deletado (simulado)`);
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);
