// O método reducer é utilizado para reduzir um array a um único valor

// paâmtros original (values)
// Acumulador (accumulator)
// Valor  inicial (0)
// Index (index da itereção atual  - opcional)

const values = [1, 2, 3, 4, 5]

const sum = values.reduce( (accumulator, currentValue, index) => {
    console.log("ACCUMULATOR :", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX:", index)
    console.log("SOMA", accumulator + currentValue)
    console.log("############")
    
    return accumulator + currentValue
},0) //começo com zero 

console.log("RESULTADO FINAL: ",  sum)