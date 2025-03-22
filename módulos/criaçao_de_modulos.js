// para expoerta tudo usamos o * e usamos o as para renomea
// import * as calc from "./calc.js" 

// import {NovoNome}  from "./calc.js"
// import sum, { multply} from "./calc.js"

import { Calc } from "./calc.js"

const calc = new Calc()

console.log("4 + 6 =", calc.sum(4, 6))

console.log("4 * 6 =", calc.multply(4, 6))

