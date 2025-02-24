/*
    Objetos
    - Uma  coleçao de dados e/opu funcionalidades;
    - Podem ter propriedades  e métods;
*/ 
// criando obj
const obj = {}
// console.log(obj)
// console.log(typeof(obj))

// obj  compropriedades e metodos

const user = {
    email: "Joao@gmail.com",
    ege: 18,
    name: {
        firt_name: "João",
        last_name: 'Gonçalves',
    },
    adress: {
        stret: "Rua X",
        number: 23,
        city: "Altamira",
        postal_code: "112345-123"
    },
    // metodos
    message:  function () {
        console.log(`Olá ${user.name.firt_name}`)
    }
}

// acessando propiedade e objetos notaçao ponto . e []

console.log(user.name)
user.message()

console.log(user["email"])
console.log(user["name"]["last_name"])

user["message"]()
