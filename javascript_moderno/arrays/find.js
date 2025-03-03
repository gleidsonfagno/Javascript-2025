// O método find() retorna o valor  do primeiro elemento do array que satisfizer a condição. Caso contrario, udefined é retornado

const values = [5, 12, 8 , 130, 44]

// retorna o primeiro elemento que valor é maior que 10
const found = values.find( (value) => value > 10)
console.log(found)


// exemplo com objetos

const fruits = [
    {name: "apples", quantity: 20},
    {name: "bananas", quantity: 420},
    {name: "orange", quantity: 30},
]

const result = fruits.find( (fruit) => {
    return fruit.name === "orange"
})

console.log(result)