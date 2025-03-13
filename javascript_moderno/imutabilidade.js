const address1 = {
    street: "Av, Brasil",
    number: 23
}

// Isso nao é uma cópia. É umna referencia.
// const address2 =  address1
// address2.number = 30

// faz a copia da objeto antigo depis cria esse novo e apaga o antigo
// cria um objeto utilizando prapriedades  e valores de address1
// Opção (11)
const address2 = {...address1}
address2.number = 30 
address2.street = "Ubiratan acacio"

console.log(address1)
console.log(address2)

const address3 = {...address1, number: 27}

console.log(address3)

// Exemplo de referência de Array
const list1 =  ["Apple", "Banana"]

// const list2 = list1
// console.log(list1, list2)
// list2.push("Watermelon")

const list2 = [...list1, "Watermelon"]
// list2.push("Watermelon")


console.log(list1, list2)
