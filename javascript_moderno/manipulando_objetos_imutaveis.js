const ebook = {
    title: "Onjects Imutaveis",
    category: "Javascript",
    author: {
        name: "fagno",
        emali: "rodrigo@gmail.com",
    }
}

const updatedBook = {
    ...ebook,
    title: "Criendo eum front end moderno HTML",
    categoory: "HTML",
    type: "Progammming"
}

// original
console.log(ebook)
console.log("\n------------------------\n")
// modificado 
console.log(updatedBook)

// Utilizando o operador de desestruturação (rest operator) para remover propriedades
console.log("\n------------------------\n")
const {author, ...bootWithoutCategory } = ebook

console.log(bootWithoutCategory)