// O strict mode (modo  estrito): ativando esse modo, os erros erram silenciados passam a gerar exeçôes no Javascript
"use strict"

function showMessege() {
    let personName = "Rodriogo Gonsalves"

    console.log("Olá", personName)
}

showMessege()

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
// tenta mudar um proprieddade somente leitra
// student.point = 10

// delete window.document

// Quado passamos paramentros duplicados
// function sum(a,a,b){
//     return a + a + b
// }