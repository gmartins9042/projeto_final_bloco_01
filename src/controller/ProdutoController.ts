import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Produto } from "../model/Produto";

export class ProdutoController implements ProdutoRepository {
    private produtos: Produto[] = [];
    private proximoId: number = 1;

    public listarTodos(): void {
        if (this.produtos.length === 0) {
            console.log("Nenhum jogo cadastrado ainda.");
            return;
        }

        this.produtos.forEach(produto => produto.visualizar());
    }

    public cadastrar(produto: Produto): void {
        produto.id = this.proximoId++;
        this.produtos.push(produto);
        console.log("✅ Jogo cadastrado com sucesso!");
    }

    public atualizar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.id === produto.id);

        if (index !== -1) {
            this.produtos[index] = produto;
            console.log("✅ Jogo atualizado com sucesso!");
        } else {
            console.log("❌ Jogo não encontrado.");
        }
    }

    public deletar(id: number): void {
        const index = this.produtos.findIndex(p => p.id === id);

        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("✅ Jogo removido com sucesso.");
        } else {
            console.log("❌ Jogo não encontrado.");
        }
    }

    public buscarPorId(id: number): Produto | undefined {
        return this.produtos.find(p => p.id === id);
    }
}
