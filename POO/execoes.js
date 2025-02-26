let obj = [17]
let  index = 300
try {
    // obj.execute()
    if (!obj.includes(17))  {
        throw new Error("O numero 17 não e está disponível.")
    }

    if (index  > 99 )  {
        throw  new RangeError("Número está fora fora do itervalo. Escolha um número 0 á  99")
        // "Número está fora fora do itervalo. Escolha um número 0 á  99"
    }
} catch (error) {
    if (error instanceof  TypeError)    {
        console.log("Metodo indisponível")
    }else if (error instanceof RangeError) {
        console.log(error.message)
    }else {
        // console.log(error)
        console.log("Não foi possível realizar a ação")
    }
}