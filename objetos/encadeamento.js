// O operador de encadeamento opcional ?. permite a leitura do valor de uma propriedade localizada internamente em uma cadeia de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.

// O operador ?. funciona de maneira similar ao operador . de encadeamento, exceto que, ao invés de causar um erro se a referência é nullish (null ou undefined), a expressão sofre um "curto-circuito" e retorna com um valor de undefined. Quando utilizado com uma chamada de função, retorna undefined se a função executada não existir.

const user = {
    id: 1,
    name: "Maria",
    addres:  {
        street: "Avenida  Brasil",
        city: "Sao Paulo",
        geo: {
            latitude: 45.5454,
            longitude: 18.9000,
        },
    },
    message: function ()  {
        console.log(`Olá ${this.name}`)
    }
}


console.log(user?.addres?.street)
user.message?.()