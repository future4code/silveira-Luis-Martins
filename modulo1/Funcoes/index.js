//Exercícios de interpretação de código//
//1.
//function minhaFuncao(variavel) {
//	return variavel * 5
//}

//console.log(minhaFuncao(2)) //10
//console.log(minhaFuncao(10)) // 50

//a//
//10,50
 
//b//
//indefinido pois não definiu uma função.


//2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


//Exercícios de escrita de código//

//2
function teoremaDePitagoras(cateto1, numero2) {
  const soma = numero1 
}

const nome = prompt("digitar nome")

function fraseTrocada (nome,idade ,cidade,profissao){
 const frase = 'Eu sou, ' + nome + ' tenho ' + idade + ' anos, moro em ' + cidade + ' e sou ' + profissao + '.'
    return frase

}

console.log(fraseTrocada('Luis', '29','Uberlandia','estudante'))



//b
let somar1 = function(number3, number4){
    somar1 = number3 >= number4
  return somar1
}
let resultado1 = somar1(10, 23)
console.log(resultado1)

//c

function devolva(number5){
  return number5 % 2 === 0
}
console.log(devolva)


//d
function MAIUSCULA(alteracaoDaMensagem){
  const novaFrase = alteracaoDaMensagem.toLocaleUpperCase()
  const tamanho = novaFrase.length
  console.log(novaFrase,tamanho)
}
MAIUSCULA('mensagem maiuscula')


devolva(10, 3)
devolva(5, 10)
devolva(3,2)

//3
//let insira1 = number(prompt("Digite o primeiro numero"))

function multiplicacao(primeiro, segundo){
  return primeiro * segundo
}

function divisao(primeiro, segundo){
  return primeiro / segundo
}

function subtracao(primeiro, segundo){
  return primeiro - segundo
}
function soma(primeiro, segundo){
  return primeiro + segundo
}


let primeiroNumeroDoUsuario = +prompt('Informe um número')
let segundoNumeroDoUsuario = +prompt('Informe outro número')
console.log(primeiroNumeroDoUsuario,segundoNumeroDoUsuario)
console.log(soma(primeiroNumeroDoUsuario,segundoNumeroDoUsuario))
console.log(subtracao(primeiroNumeroDoUsuario,segundoNumeroDoUsuario))
console.log(multiplicacao(primeiroNumeroDoUsuario,segundoNumeroDoUsuario))
console.log(divisao(primeiroNumeroDoUsuario,segundoNumeroDoUsuario))