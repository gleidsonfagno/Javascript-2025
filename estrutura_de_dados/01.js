// ## **Lista de Compras**

// Este projeto implementa uma lista de compras em Python. Ele permite que os usuários adicionem e removam itens da lista, além de listar todos os itens adicionados.

// ### **🚀 Funcionalidades**

// - Adicionar item à lista;
// - Remover item da lista;
// - Listar itens da lista.

// ### **Estrutura do Projeto**

// - `itens`: Uma lista que armazena os nomes dos itens.
// - `quantidades`: Uma lista que armazena as quantidades correspondentes de cada item.
// - `ListaDeCompras`: Classe que gerencia a adição, remoção e listagem das listas.

lista = []

class ListaDeCompras{
    // constructor (name)  {
    //     this.name = name
    // }
    
    adicionar (name) {
        lista.push(name)
    }

    remover(name) {
        if (lista.includes(name)){
            lista.pop(name)
            console.log(`O  item ${name} foi removido\n`)
        }
        else {
            console.log(`O item  ${name} não existe na lista \n`)
        }
    }

    exibirLista() {
        console.log(lista)
        console.log("\n")
    }

}


let item = new ListaDeCompras()

item.adicionar("Teclado")
item.adicionar("Notebook")
item.adicionar("Mouse")

item.exibirLista()

item.remover("Teclado")
item.remover("Teclados")

item.exibirLista()