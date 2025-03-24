// (1) E  execudato de forma sícrona 
console.log(1)

// (3) Microtasks são executadas antes de temporarizadoes e proomessas.
queueMicrotask( () =>  {
    console.log(2)
})

// (5) execulta o código de fomra sínc, MacroTasks que aguarda o evento de temporizador dr ser acionado
setTimeout(() => {
    console.log(3)
},  1000)

// (2) Execução síncrona
console.log(4)

// (4) Adiciona uma microtask.
Promise.resolve(true).then(() =>  {
    console.log(5)
})