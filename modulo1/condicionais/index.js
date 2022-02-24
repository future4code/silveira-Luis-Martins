//Exercícios de interpretação de código
//1.
//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) {
//  console.log("Passou no teste.")  
//} else {
//  console.log("Não passou no teste.")
//}
//a//Explique o que o código faz. Qual o teste que ele realiza? 
//Se o resultado for igual a 2, passou no teste.

//b//Para que tipos de números ele imprime no console "Passou no teste"? 
//2 e 0

//c//Para que tipos de números a mensagem é "Não passou no teste"? 
//Todos os números que não forem iguais a 0 ou 2.22

//2.
//let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {                               //a) Para que serve o código acima? 
 // case "Laranja":                              //   O codigo determina qual o valor da fruta escolhida pelo prompt  
//    preco = 3.5                                //b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//    break;                                     // 3.5
//  case "Maçã":                                 //c) vai imprimir o que esta no default.
//    preco = 2.25                            
//    break;
//  case "Uva":
///    preco = 0.30
//    break;
//  case "Pêra":
 //   preco = 5.5
 // default:
//    preco = 5
   // break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//3.
//const numero = Number(prompt("Digite o primeiro número."))     //a) Pedindo ao usuario digitar o numero.

//if(numero > 0) {                                               //b) Se qualquer numero digitado for maior que 0 vai imprimir o que esta no console.log
//  console.log("Esse número passou no teste")                   //    e se for menor que 0 como o (-10) não vai imprimir nada.
//	let mensagem = "Essa mensagem é secreta!!!"                //c)  o console.log deveria estar dentro do escopo.
//    console.log(mensagem)
//}



//Exercícios de escrita de código
//1.
const numero = Number(prompt("Qual a sua idade?"))
let idade = numero

if (numero >= 18) {
  console.log("Você pode dirigir!")
}
else {(18 < numero)
  console.log("Você não pode dirigir.")
}
console.log(idade)

//2.

let turno = prompt("Qual turno do dia vc estuda? Responda com M, V ou N")


if (turno == 'V'){
    console.log("Boa Tarde!")
}

if (turno == 'M'){
    console.log("Bom Dia!")
}

if (turno == 'N'){
    console.log("Boa Noite!")
}

//3.

let turnos = prompt("Qual turno do dia vc estuda? Responda com M, V ou N")
switch(turnos){

case 'V':
    console.log("Boa Tarde!")
break

case 'M':
    console.log("Bom Dia!")
break

case  'N':
    console.log("Boa Noite!")
    break
}

//4.

let genero = prompt("Qual o genero do filme?")
let preco = prompt("Qual o preço do ingresso?")

if(genero == 'Fantasia' && preco <= 15 ){
    
console.log("Bom filme!")
}
else{
    console.log('Escolha outro filme')
}

