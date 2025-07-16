import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Produto } from "../model/Produto";

export class ProdutoController implements ProdutoRepository {
    private produtos: Produto[] = [];
    private proximoId: number = 1;

    public listarTodos(): void {
        try {
            if (this.produtos.length === 0) {
                console.log("Nenhum produto cadastrado.");
                return;
            }

            for (let produto of this.produtos) {
                produto.visualizar();
            }
        } catch (error) {
            console.log("Erro ao listar produtos:", error);
        }
    }

    public cadastrar(produto: Produto): void {
        try {
            produto.id = this.proximoId++;
            this.produtos.push(produto);
            console.log("Produto cadastrado com sucesso.");
        } catch (error) {
            console.log("Erro ao cadastrar produto:", error);
        }
    }
    public atualizar(produto: Produto): void {
        try {
            const posicaoProduto = this.produtos.findIndex(p => p.id === produto.id);

            if (posicaoProduto !== -1) {
                this.produtos[posicaoProduto] = produto;
                console.log("Produto atualizado com sucesso.");
            } else {
                throw new Error("Produto não encontrado.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log("Erro ao atualizar produto:", error.message);
            } else {
                console.log("Erro ao atualizar produto:", error);
            }
        }
    }

    public deletar(id: number): void {
        try {
            const posicaoProduto = this.produtos.findIndex(p => p.id === id);

            if (posicaoProduto !== -1) {
                this.produtos.splice(posicaoProduto, 1);
                console.log("Produto deletado com sucesso.");
            } else {
                throw new Error("Produto não encontrado.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log("Erro ao deletar produto:", error.message);
            } else {
                console.log("Erro ao deletar produto:", error);
            }
        }
    }

}