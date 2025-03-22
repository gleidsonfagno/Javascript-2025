const ebook = {
    title: "Onjects Imutaveis",
    category: "Javascript",
    author: {
        name: "fagno",
        emali: "rodrigo@gmail.com",
    }
}

function deepFreeze(object) {
    const props = Reflect.ownKeys(object)
    // console.log(props)
    for (const prop of props) {
        const value = object[prop]
        console.log(value)
        // console.log(prop)

        // verifica se o valor e objeo ou função  pra continuar aplicando o deepfeze em objetos aninhados.
        if(value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }

    // returna o onbjreeto ccongelado
    return Object.freeze(object)
}
// chama a função para congelar oo objeto com deep freze (conseland profundamente)
deepFreeze(ebook)

ebook.category = "HTML"
ebook.author.name = "Maria"

console.log("===============")

console.log(ebook)