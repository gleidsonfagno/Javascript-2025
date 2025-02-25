// Intl é a PAI de Internacionalizaçao o ECMAScript.

// Obtém informaçôes da localidade.
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

// exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pr-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()

// Obtém a diferença em minutos do time zoone.
console.log(date.getTimezoneOffset())

// Obtém a diferença  em horas doo timezone.
console.log(date.getTimezoneOffset() / 60)


const date_with_time_zone = new Date()
console.log(date_with_time_zone.toLocaleString())