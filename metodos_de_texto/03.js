const credit_card = "12345681234928"
console.log(credit_card.length)

// Os 4 últimos dígitos
const last_for_digits = credit_card.slice(-4)
console.log(last_for_digits)

// Vai mascara os dígitos exeto os 4 últimos
// padStart preenche a string do início.
const masked_number =  last_for_digits.padStart(credit_card.length, "X")
console.log(masked_number)

// padEnd prenche a string no final.
const numero = "123"

console.log(numero.padEnd(10, "#"))