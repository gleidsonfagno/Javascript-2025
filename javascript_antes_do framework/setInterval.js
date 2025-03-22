// setInterval() execulta umafunção após um intervalo de  tempo especificado.

let value = 10
const interval =  setInterval( () => {
    console.log(value)
    value--

    if(value === 0){
        console.log("Feliz Ano Novo!!")

        // Interronpe o intervalo d e execução
        clearInterval(interval)
    }
}, 1000)