const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "fagno",
        email: "fagno@gmail.com"
    }
}
console.log(book)
// o Javascript em si nao impoe restrições  á modificações dos objetos
book.category = "HTML"

// congela o objeto e impede modificação.
Object.freeze(book)
book.category =  "CSS" //nao modifica
console.log(book)

// Object.freeze(book)  nao  impede  modificações aninhadas
book.author.email = "Joa@gmail.com"
console.log(book)