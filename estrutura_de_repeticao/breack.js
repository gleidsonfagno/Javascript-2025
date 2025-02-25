// breack encerra a execuçao  da  repetição ou switch para segui  para seguinte instruçao.

let option = 3

switch (option) {
    case 1:
        console.log("Cadastra")
        break
    case 2:
        console.log("Atualizar")
        break
    case 3:
        console.log("Remover")
        break
    default:
        console.log("Opção invalida")
        break
}

// finalizar a repetiçao
for (let i=0; i < 10; i++)    {
    if (i === 5 ){
        break
    }
    console.log(i)
}