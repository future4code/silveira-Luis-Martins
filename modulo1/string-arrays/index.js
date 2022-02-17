//Exercícios de interpretação de código
//1//

let array
console.log('a. ', array)  //undefined

array = null
console.log('b. ', array)  //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //11
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) //(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6] //9
console.log('f. ', valor)


//2//
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código
//1//
const email = prompt("Qual seu E-mail?")
const nome = prompt("Qual seu nome?")

console.log ("O e-mail", email , "foi cadastrado com sucesso.Seja bem-binda(o)," + nome +".")

//2//
let comidas = ['Lasanha','Strogonoff','Carne','Alface','Couve']
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

//Desafio
let comidaFavorita = Number(prompt("Qual sua comida favorita?"))
comidas[1] = comidaFavorita
console.log(comidas)

//3//
let listaDeTarefas = []
let tarefa = prompt("Informe 3 tarefas que precisa realizar no dia. Digite a primeira tarefa")
let tarefa2 = prompt("Digite segunda tarefa")
let tarefa3 = prompt("Digite terceira tarefa")


console.log(tarefa)
console.log("Lista de tarefas:" + (tarefa))
console.log(listaDeTarefas.push(tarefa,tarefa2,tarefa3))
console.log(listaDeTarefas)
let tarefaPrincipal = prompt("Informe qual não e a principal?")
