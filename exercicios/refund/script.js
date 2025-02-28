// seleciona  os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")



// Elementos da lista
const expenseList = document.querySelector("ul")
const expensesTotal = document.querySelector("aside header h2")
const expenseQuantity = document.querySelector("aside header p span")

amount.oninput = () => {
    //tiramos  a letra do input para receber numeros e  onde tiver  letratroca  por nada
    let value = amount.value.replace(/\D/g, "") 
    // reatribui o novo valor formatado

    // trasformar o valro em centavos (ex 150 /  100 1.5 que vala a 1,50)
    value = Number(value) / 100
    amount.value = formatCurrencyBRL(value)
}
function  formatCurrencyBRL(value) {
    // formata valor pradrão real brasileiro
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return  value
}

// Captura o envento de submit do formuário para oobter os vallores.
form.onsubmit = () => {
    event.preventDefault()

    // cra um objeto com  as etalçhe das despesas
    const newEspense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value, // esse e o valor que está guardado em selected
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    // console.log(newEspense)
    // chama a função que vai adicionar item na lista
    expenseAdd(newEspense)
}
// Aicionanovo item na lista
function expenseAdd(newExpense) {
    try {
        // cria o elemento (li) para pra adiciona na lista (ul)
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")
        // Cria o icone da categoria
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Cria a info da despesa.
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        // Nome da despesa
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        // Nome da categoria da despesa
        expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        // Criar valor da  despesa
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML= `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        // Cria o icone de remover
        const removerIcon = document.createElement("img")
        removerIcon.classList.add("remove-icon")
        removerIcon.setAttribute("src", "img/remove.svg")
        removerIcon.setAttribute("alt", "remover")

        // Adiona nome e categoria na div da  informaçoes
        expenseInfo.append(expenseName, expenseCategory, )
        // adiciona as informaçoes no item.
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removerIcon)

        // Adicoona o item na lista
        expenseList.append(expenseItem)
        
        // Limpa os inputs
        formClear()

        // atualiza os totais
        updateTotals()
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error.message)
    }
}

// atualiza os totais.
function  updateTotals(){
    try {
        // recupera todosos  (li)  da  lista (ul).
        const items = expenseList.children

        // atualiza aquantiade de itens na lista.
        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`
        
        // Incrementar o total, percorrendo cada item da lista
        let = total = 0

        // Loop através de todos os itens na lista 'items'
        for (let item = 0; item < items.length; item++) {
            
            // Seleciona o elemento com a classe 'expense-amount' dentro do item atual
            const itemAmount = items[item].querySelector(".expense-amount")

            // Remove todos os caracteres que não são dígitos do texto e substitui a vírgula por um ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

            // convereter pra float
            value = parseFloat(value)

            // veriffica se o numero e validao
            if(isNaN(value)) {
                return  alert("Não foi possivel calcular  o total. O valor   nao parece ser um número.")
            }

            // incrementado o valor total
            total += Number(value)
            // console.log(total)
        }

        // Cria a span para sdicionar o R$ formatado
        const symbolBRL =  document.createElement("small")
        symbolBRL.textContent = "R$"

        // formata o valor e remove o R$  que será exibido pela small ccom um estilo customizado.
        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")

        // limpa  o conteudo do eleemento. 
        expensesTotal.innerHTML = ""

        // adiciona o simbolo da moeda e o valor formatado
        expensesTotal.append(symbolBRL, total)

    } catch (error) {
        console.log(error)
        alert("Não foi possivel atualizar os totais.")
    }
}

// Evento que captura os cliques da lista.
expenseList.addEventListener("click", function(event) {
    // verificar se o elemento clicado e o icone de remover.

    if (event.target.classList.contains("remove-icon")) {
        // obtem a li pai do elementoclicado
        const item = event.target.closest(".expense") // pai mais proximo

        // remove o item da lista
        item.remove()
        // console.log(event)
        // console.log(item)
    }

    updateTotals()
})

// Limpa os inputs
function formClear() {
    expense.value = ""
    category.value = ""
    amount.value = ""

    // Coloca o foco no input 
    expense.focus()

}