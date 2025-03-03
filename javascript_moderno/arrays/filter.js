// O metodo filter() criar um novo array com todos os elementos que passaram na condiçao.

const words = [
    "Javascript",
    "HTML",
    "CSS",
    "Web",
]
// filtradno palavras que tenho mais do que letras.
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse ", price: 40, promotion: false},
    {description: "Monitor ", price: 490, promotion: true},
]

const serch = "Teclado"

// fitradno produtos que estao na promoção
const promotion = products.filter((product) => {
    
    // return product.promotion === true
    // console.log(product.description === serch)
    if (product.description === serch){
        return product 
    }  

})

console.log(promotion)