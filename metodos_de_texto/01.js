let messege = "Estou estudando os fundamentos de Javscript"

console.log(messege)

// maisculo
console.log(messege.toUpperCase())

// minusculo
console.log(messege.toLowerCase())

// comprimento de uma variavel conta espaços
console.log(messege.length)

let password = "12345"

if (password.length < 6) {
    console.log("A  senha deve conter almenos 6 digitos")
}

// quantos digitos tem um número
let numero =  1234
console.log(String(numero).length)
console.log(numero.toString().length)