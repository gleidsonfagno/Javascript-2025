export class Calc{
    sum(a, b){
        return a + b
    }
    
    multply(a,b){
        return a * b
    }
}

// defalt export - é a função padrao foecida pelo módulo.
export default function sum(a, b){
    return a + b
}

// named export - cada métoodo é importado pelo seu próprio nomoe de exportação
export function multply(a,b){
    return a * b
}

// ou exporta tudo e renomear
// export {sum as NovoNome, multply}