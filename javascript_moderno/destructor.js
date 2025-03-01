// destructoring assignment(desestruturção) permite extrair dados de arras ou em variaveis destitas

const data = ["fagno", "fagno@gmail.com"]

// desetruturando o Array
const [username, email] = data

console.log("Nome", username)
console.log("Email", email)

// somente ao primeiro.
const fruits = ["Banana", "Apple", "Orange"]
const [babana] = fruits
console.log(babana)

// Ignorando a primeira e a segunda posiçâo
const [, , orange] = fruits
console.log(orange)

// desetruturar objetos

const product = {
    descripton: "Teclado",
    price: 120,

}

const {descripton, price} = product

console.log("Descriçâo",descripton)
console.log("Preço", price)

function newProducts({descripton, price}) {
    console.log("### NOVO ###\n")
    console.log("Descriçâo",descripton)
    console.log("Preço", price)
    console.log("\n")
}

newProducts({
    descripton: "Mouse",
    price: 80
})