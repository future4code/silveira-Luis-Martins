//1//

let idade = parseInt(prompt("digite sua idade"))
let idadeMelhorAmigo = parseInt(prompt("digite a idade do seu melhor amigo(a)"))
let diferencaIdades = idade - idadeMelhorAmigo

//2//
console.log("sua idade é maior que a do seu amigo", idade>idadeMelhorAmigo)
console.log("a diferença de idades é", diferencaIdades)

let numeroPar = parseInt(prompt("digite um número par"))

console.log("resto da divisão por 2 é", numeroPar % 2 )

//3//

let idadeEmAnos = parseInt(prompt("digite sua idade"))
let idadeEmMeses = idadeEmAnos*12
let idadeEmDias = idadeEmAnos*365
let idadeEmHoras = idadeEmDias*24

console.log("sua idade em meses é", idadeEmMeses)
console.log("sua idade em dias é", idadeEmDias)
console.log("sua idade em horas é", idadeEmHoras)

//4//

let primeiroNumero = parseInt(prompt("digite um número"))
let segundoNumero =  parseInt(prompt("digite outro número"))
let primeiroNumeroEDivisivel = (primeiroNumero % segundoNumero) === 0
let segundoNumeroEDivisivel = (segundoNumero % primeiroNumero) === 0

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo? ", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumeroEDivisivel)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumeroEDivisivel)

//Desafio: Não consegui fazer//