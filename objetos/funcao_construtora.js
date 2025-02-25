// Função Construtora para um objeto
function  createPrdutc(name)   {
    const  product = {}

    product.name  = name
    product.details = function () {
        console.log(`Ola nome do  produto é ${this.name}`)
    }

    return product
}

// Criando uma nova instância de produto
const product1 = new createPrdutc("Teclado")
console.log(product1.name)
product1.details()

console.log("\n")

const product2 = new createPrdutc("Mouse")
console.log(product2.name)
product1.details()

function Person(name) {
    this.name = name
    this.nessage = function () {
        console.log(`Olá ${this.nome}`)
    }
}

const person1 = new createPrdutc("João")