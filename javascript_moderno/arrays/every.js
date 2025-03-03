// O metodo Every() testa se todos os  elementos  do array pasam na condição e retorna em valor boolean.

// exemplo de array idades

const ages = [18, 20, 18, 19,  30]

// Verifica se todas as idades são maiores ou igual a 18
const result = ages.every( (age) => {
    return age >= 18
})

console.log(result)