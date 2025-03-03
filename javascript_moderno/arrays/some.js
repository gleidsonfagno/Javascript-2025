// o metodo some()  testa se aou menos um dos elementos no array passa na condição e r etorna um valor true ou false.

// exemplo de array de idades
const ages =  [13, 38, 17,  16]

const result =  ages.some( (age) => {
    return age  >=  18
})

console.log(result)