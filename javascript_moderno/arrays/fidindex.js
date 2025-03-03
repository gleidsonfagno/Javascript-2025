// O método findIndex() retorna o indice no arrays do primeiro elemento que satisfizer a condiçõa, retorna -1, indicando que nenhum elemeto passou no teste.

const values = [4, 6, 8, 12]

// Obtem o primeiro índice do ellemento que o valor é maior do que 4.
const index = values.findIndex( (value) => value > 4)
console.log(index)
console.log(values[index])

// exemplo de item nao encontrado
console.log(values.findIndex( (value) => value > 12))