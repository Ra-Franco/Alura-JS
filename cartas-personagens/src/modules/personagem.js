export class Personagem {
    nome
    vida = 100
    mana = 100
    tipo
    #level
    descricao

    constructor(nome) {
        this.nome = nome;
        this.level = 1;
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel() {
        this.level -= 1
    }

    get level() {
        return this.#level
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.#level === personagem2.#level) {
            return 'Emparte!'
        }
        // if (personagem1.level > personagem2.level) {
        //     return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
        // }
        return personagem1.level > personagem2.level
            ? `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
            : `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
    }

}