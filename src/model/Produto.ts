export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;

    constructor(id: number, nome: string, preco: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    public abstract visualizar(): void;
}
