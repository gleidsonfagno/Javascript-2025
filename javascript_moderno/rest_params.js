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