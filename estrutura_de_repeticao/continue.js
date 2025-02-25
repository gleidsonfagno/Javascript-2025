// continue ecerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração

for (let i  = 0; i < 10; i++){
    if (i ===  5) {
        console.log(`Pulando o numero  ${i}`)
        continue
    }
    console.log(i)
}