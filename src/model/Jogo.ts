import { Produto } from './Produto';

export class Jogo extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        public genero: string
    ) {
        super(id, nome, preco);
    }

    public visualizar(): void {
        console.log(`\nID: ${this.id}`);
        console.log(`Título: ${this.nome}`);
        console.log(`Preço: R$${this.preco}`);
        console.log(`Gênero: ${this.genero}`);
    }
}
