import { Mago } from "./modules/mago.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Personagem } from "./modules/personagem.js"

const mago = new Mago('Ast', 4, 'fogo', 4, 3)
const maga = new Mago('jus', 43, 'gelo', 64, 53)
const arquiero = new Arqueiro('sla', 45, 13)
const arqueiroMago = new ArqueiroMago('teste', 10, 8, 'fogo', 20, 28)

const personagens = [mago, maga, arquiero, arqueiroMago]

new PersonagemView(personagens).render()
console.log(Personagem.verficarVencedor(mago, arqueiroMago))