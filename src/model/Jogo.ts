import { Produto } from './Produto';

export class Jogo extends Produto {
    private _genero: string;

    constructor(id: number, nome: string, preco: number, genero: string) {
        super(id, nome, preco);
        this._genero = genero;
    }

    get genero(): string {
        return this._genero;
    }

    set genero(genero: string) {
        this._genero = genero;
    }

    public visualizar(): void {
        console.log(`\nID: ${this.id}`);
        console.log(`Título: ${this.nome}`);
        console.log(`Preço: R$${this.preco}`);
        console.log(`Gênero: ${this.genero}`);
    }
}
