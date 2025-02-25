// for in executa iterções  a  parteit  de umobjeto  e  percorret as  propriedades.

let person = {
    name: "Ana",
    surname: "maria",
    email:  "maria@gmail.com"
}

for  (let propety  in  person) {
    // exibi o nome da propriedade
    console.log(propety)
    // exibe  o conteudo da propriedade.
    console.log(person[propety])
}

let students = ["Maria", "Tamari", "Amanda"]

for (let index in students)  {
    console.log(index)
    console.log(students[index])
}