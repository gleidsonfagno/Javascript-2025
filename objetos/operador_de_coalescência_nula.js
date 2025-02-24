// O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

// Ao contrário do operador lógico OR (||), o operando esquerdo é retornado se houver um valor falsy (falso) que não seja null ou undefined. Em outras palavras, se você usar || para obter algum valor padrão para outra variável foo, você pode enfrentar comportamentos inesperados se você considerar algum valor falseável como utilizável (eg. '' ou 0).

let content = null
console.log(content ?? "Conteúdo padrao")

const user = {
    name: "João",
    avatar: undefined
}

console.log(user.avatar ?? "default.png")