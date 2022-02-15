let a = 10
let b = 25

console.log(b) //25

b = 5
console.log(a, b) //10,5

c = a
b = c
a = b

console.log(a, b, c) //10,10,10

let p = prompt("Quantas horas você trabalha por dia?") //horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") //valorDia

/*let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?") 
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDia/horasTrabalhadas} por hora`) //valorPorHora*/


let nome 
let idade 

console.log(typeof nome) 
console.log(typeof idade)

// //Foi impresso undefined nenhum valor foi atribuido

nome = prompt("Qual o seu Nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) 
console.log(typeof idade)

// //Na variavel idade foi impresso string.
console.log("Olá",nome,", você tem", idade, "anos.")
const pergunta1 ="Qual a cor da sua camisa?"
const pergunta2 ="Qual a cor do seu short?"
const pergunta3 ="qual a cor do seu bone?"
let corDaCamisa
let corDoShort
let corDoBone

corDaCamisa =prompt(pergunta1)
corDoShort =prompt(pergunta2)
corDoBone =prompt(pergunta3)

console.log(pergunta1 + corDaCamisa)
console.log(pergunta2 + corDoShort)
console.log(pergunta3 + corDoBone)

a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


let primeiroNumero
let segundoNumero

primeiroNumero = Number(prompt("Digite o primeiro número:"))
segundoNumero = Number(prompt("Digite o segundo Número:"))

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero + segundoNumero ,".")

console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero * segundoNumero , ".")