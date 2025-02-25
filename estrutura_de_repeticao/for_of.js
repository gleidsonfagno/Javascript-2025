// for of  itera sobre  valores  de um objeto iterável. diferente do for in ele mostro os valores nao so index
let  students   =  ["Rodrigo", "Amanda", "Jhon"]

for   (let student of students) {
    console.log(student)
}

let users  =  [
    {
        name:  "Fagno",
        email:  "fagno@gmail.com"
    }
]

for (let value of users) {
    console.log(value.email)
}