class MycustomError {
    constructor (message){
        this.message = "Classe de erro Customizado: " + message
    }
}

try {
    throw new Error("Erro genérico")
    throw new MycustomError("Erro personalizado  lançado!")
} catch (error) {
    if(error instanceof MycustomError) {
        console.log(error.message)
    }else {
        console.log("Nao foi possível executar!")
    }
}