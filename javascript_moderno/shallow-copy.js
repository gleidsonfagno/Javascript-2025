// Shallow copy (cópia superficial): não pega os itens aninhados.

const htmlCouse = {
    course: "HTML",
    students: [{
        name: "Rodrigo",
        email: "rodrigo@gmail.com",
    }]
}

// const jsCourse = {
//     ...htmlCouse,
//     course: "Javascript",
// }

// vai modificar o htmlCouse também  students é uma referencia e nõa uma copia.
// jsCourse.students.push({
//     name: "João", email: "joão@gmail.com"
// })

// copia profunda

const jsCourse = {
    ...htmlCouse,
    course: "Javascript",
    students: [...htmlCouse.students, {
        name: "João",
        email: "joao@gmail.com"
    }]
}

// ou asssim tabem
jsCourse.students.push({name: "Jonathan", email: "jonatan@gmail.com"})

htmlCouse.students = [
    ...htmlCouse.students,
    {name: "fagno", email: "fagno@gmail.com"}
]
console.log(htmlCouse, jsCourse)