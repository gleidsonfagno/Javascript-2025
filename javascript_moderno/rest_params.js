// Rest params (...) permite representar um número identifinido de argumentos como array.

function values(...rest) {
    // mostra a quantidade de parâmetros.
    console.log(rest.length)
    // Conteudo do array
    console.log(...rest)
    // Exibe o conteúdo do rest que é um array.
    console.log(rest)
}

values(1, 2, 3, 4, 6)

// spread (espalhar) permite que um objeto iterável, como um expressão de array ou uma string seja expadido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2]
console.log(numbers)
// Spread
console.log(...numbers)

const users = [
    {
        name: "Fagno",
        age: 23,
        avatar: "F.png"
    },
    {
        name: "Fagno",
        age: 23,
        avatar: "F.png"
    },

]

console.log(...users)