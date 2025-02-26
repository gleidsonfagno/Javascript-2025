// metodo de escrita Pascal Case
class Person {
    constructor(name) {
        console.log(`Olá ${name}`)
    }
}

const person = new Person("Fagno")

// propriedade dentro da classe
class Product {
    constructor(name) {
        this.name = name
    }
}

const notebook = new Product("Notebook")
const Mouser = new Product("Mouser")
const Teclado = new Product("Teclado")
console.log(notebook.name)
console.log(Mouser.name)
console.log(Teclado.name)

// adicionar metodos dentro da classe

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sedEmail() {
        console.log("Email enviado para", this.name, "No o endereço", this.email)
    }
}

const reginaldo = new User("Reginaldo", "Reginaldo@gmail.com")
reginaldo.sedEmail()

// Metodo  estatico

class Pais {
    static showMessege(message) {
        console.log("Essa é uma mensagem da classe país")

        console.log(message)
    }
}
// const pais = new Pais()
Pais.showMessege("Essa messagem do metodo e statico sem o this")

// Herança

class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log(`Algun som genérico do ${this.name}\n`)
    }
}

class Dog extends Animal {
    // sobre escreevendo métodos
    makeNoise() {
        console.log("WOOf! WOOf! WOOf!")
    }
}

const dog = new Dog("Dragolino")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    makeNoise() {
        console.log("Mial!.... mial!...")
    }

    run() {
        console.log(`${this.name} esta correndo\n`)
    }
}

const cat = new Cat("Rafael")
console.log(cat.name)
cat.makeNoise()
cat.run()

