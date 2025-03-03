// Método map() chama  a  função callback recebida por parâmetro para cada elemento do array original, em ordem, e coonstrói um novo com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = [
    "Teclado",
    "Notebook",
    "Mouse",
    "Monitor",
]

// percorrendo os itens do array
products.map((product) => {
    console.log(product)
})

// sintaxe reduzida
// products.map((product) => console.log(product))

// Utilizando o novo  objeto retornado.
const formatted = products.map((product) => {
    // return product.toUpperCase()


    return {
        id: Math.random(),
        description: product,
    }
    
})

console.log(formatted)