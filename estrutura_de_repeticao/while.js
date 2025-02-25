// executa ate  que a condiçao seja  verdadeira

let execute= true
while (execute) {
    // let response = window.prompt("Deseja continua: 1 (sim) ou 2 (nao)")
    console.log("Deseja continua: 1 (sim) ou 2 (nao)\n")
    let response = "2"
    console.log(`sua resposta ${response}`)
    if (response  ===  "2") {
        execute = false
    }
}

console.log("Segue o fluxo...")
// sempre tomar cuidado com o loop infinito
