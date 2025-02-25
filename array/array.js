// crinado array com construto.
const  new_array =   new Array()

new_array.push("fagno")

// cria o array com  posiçoes vazias
const avalilable = new Array(10)
console.log(avalilable.length)
console.log("\n")

let fruits = ["Apple", "Banana", "Orrange"]
console.log(fruits)
console.log(fruits.length)

// acessar o indice
console.log(fruits[1])
// obtendo dinamicamente o  ultimo item
console.log(fruits[fruits.length  -1])


let full_name  =  "Gleidson fagno da conçeição pinheiro"
console.log(full_name)

console.log(full_name.split(""))
console.log(Array.from(full_name))

// adicionar e remover 
console.log("\n")
let users = []
console.log(users)

// adicionar no final  do arrray
users.push("Fagno")
users.push("João")
users.push("Maria")
users.push("Felicia")
// adicionar no inicio
users.unshift("Ana")

console.log(users)

// remover do inicio
users.shift()
// remove do  final
users.pop()
console.log(users)

//encontra e retorna o indice se  nao  encontrar retorna -1
let positin = users.indexOf("Fagno")

console.log(positin)

// remover um item  pela  posiçao do índice (1  é  a  posiçao número  de  intens  para  remover)
// users.splice(1, 3)
users.splice(positin,  1)
console.log(users)

// Tipos de  dados no array 
let my_array  = [
    "Um text",
    1,
    true,
    function () {
        console.log("Função dentro do array")
    },
    {
        name: "fagno",
        age:   24,
    }
]

console.log(my_array[0])  // texto
console.log(my_array[1])  // numero
console.log(my_array[2])  // boolen
my_array[3]()             // função
console.log(my_array[4].name, my_array[4].age)
console.log("\n")

// verificar se existe um iten no array
let cidades = ["Altamira", "São paulo", "Maranhão"]

console.log(cidades.includes("Altamira"))
console.log(cidades.includes("Anapu"))