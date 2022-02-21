//Exercícios de interpretação de código
//exercicio 01

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // Canal globo, horario 14h

//exercicio 02

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Juca, 03, SRD//
console.log(gato)  //Juba, 03, SRD// Copiou e trocou o nome
console.log(tartaruga) //Jubo, 03, SRD//  trocou o "a" pelo "o"  

// A sintaxe faz a copia.

//Exercícios de escrita de código
//01
const pessoa = {
    nome: "Luis", 
    apelidos: ["Luizinho", "Liz", "Lui"]
    }
    function nomeDaPessoa (){
return pessoa
  }
console.log(`´Eu sou Luis, mas pode me chamar de:${pessoa.apelidos}`)

const novaPessoa = {
    ...pessoa,
apelidos: ['lulu','luz','hui']
} 
console.log(novaPessoa.apelidos)

//Exercicio 02

const dados = {
	nome: "Luis", 
  idade: 29, 
	profissao: "estudante"
}
const dadosDois = {
	nomeDois: "Franciele", 
  idadeDois: 26, 
	profissaoDois: "advogada"
}

function combinarDados (dados,dadosDois){
    let array = []

    let nome = dados.nome.length
    let nomeDois = dadosDois.nomeDois.length
    let profissao = dados.profissao.length
    let profissaoDois = dadosDois.profissaoDois.length

let resultadoUm = `${dados.nome}, possui ${nome} caracteres, ${dados.idade} anos, ${dados.profissao}, possui ${profissao} caracteres. `
let resultadoDois = `${dadosDois.nomeDois}, Possui ${nomeDois} caracteres, ${dadosDois.idadeDois} anos, ${dadosDois.profissaoDois}, tem ${profissaoDois} caracteres. `

array.push(resultadoUm, resultadoDois)
return array
}
console.log(combinarDados(dados, dadosDois))

//exercicio 03

let carrinho = []
const fruta1 = {
    nome: "Laranja", disponivel1: true
}
const fruta2 = {
    nome1: "banana", disponivel2: true
}
const fruta3 = {
    nome2: "Abacaxi", disponivel3: true
}
function receba (){
   let = array1 
   let = array2
   let = array3
   carrinho.push[array1,array2,array3]
   return carrinho
}
console.log(receba(fruta1,fruta2,fruta3))




