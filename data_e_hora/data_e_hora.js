// Data e hora atual
console.log(new Date())
// data de referencias
console.log(new Date(0))
// numero de milissegundos
console.log(new Date().getTime())


// data e hora especifica os meses e de (0 a 11)
// defie ano e mês 
console.log(new Date(2025, 6, 3))

// data e hora especifica
console.log(new Date(2025, 6, 3, 14, 30, 0))

console.log(new Date("2024-07-03T14:30:00"))
console.log(new Date("July 3, 2032 13:30:33"))

// metos 
console.log("\nMetodos de obter data\n")

let date = new Date() //("2024-07-03T14:30:00")
// dia da semana 0 á 6 (domingo e 0)
console.log(date.getDay())

//dia do mês (o á  30)
console.log(date.getDate())

// mes (0 á 11)
console.log(date.getMonth())
// ano
console.log(date.getFullYear())
// horas
console.log(date.getHours())
// minutos
console.log(date.getMinutes())
// segundos
console.log(date.getSeconds())

// mofificar
const full_date = new Date()
console.log(full_date)
full_date.setFullYear(2030)
full_date.setMonth(10)
full_date.setHours(20)
full_date.setMinutes(25)
full_date.setSeconds(30)

console.log(full_date)

// formata 

date = new Date("2014-07-02T14:30:30")
// formata para  o dia sempre ter dois digitos
let day = (date.getDate() + 1).toString().padStart(2,"0")
console.log()

let month = (date.getMonth() + 1).toString().padStart(2,"0")
console.log(month)

let year = date.getFullYear()

console.log(`${day}/${month}/${year}`)

// mudadando para string
date = new Date()

console.log(date.toString())

// somente data
console.log(date.toDateString())

// somente hora
console.log(date.toTimeString())

// exibi de acordo  com  lacalidade

console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// formato   escolido
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("PT-BR"))

console.log("\n")
// metodod de  toLocaleString
console.log(date.toLocaleString())

console.log(date.toLocaleString("en", {
    dateStyle: "short"
}))
console.log("\n")

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "long"
}))

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "medium"
}))

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "full"
}))

console.log("\n")

console.log(date.toLocaleString("pt-BR", {
    day:  "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}))

let amount = 1200.90
console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))


