// substituir parte de um texto
let messege = "Estou estudando os fundamentos do Javascript"

//o primerio paramentro e a palava que tem no texto a segunda vai entrar no lugar
console.log(messege.replace("Javascript", "HTML"))  

// (Start, End)
console.log(messege.slice(6, 30))

// extraindo de  trás para frente
console.log(messege.slice(-11))

// 
let text_with_apace = "      Texto de exemplo         "
console.log(text_with_apace.length)
console.log(text_with_apace.trim())
