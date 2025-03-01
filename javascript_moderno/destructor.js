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