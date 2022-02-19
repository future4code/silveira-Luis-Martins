// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
a = prompt("Digite o valor da altura")
l = prompt('Digite o valor da altura')

let num1 = Number(a)
let num2 = Number(l)
let operacao = num1 * num2
console.log(operacao)
}


// EXERCÍCIO 02
function imprimeIdade() {
  a = prompt ('Ano atual')
  n = prompt ('Ano de nascimento') 

  let num1 = Number(a)
  let num2 = Number(n)
  let operacao = num1 - num2
  console.log(operacao)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura **2)

}
console.log(calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade?')
email = prompt('Qual seu e-mail?')

let frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log(frase)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores = []
  let primeira = prompt('Qual a sua primeira cor preferida?')
  let segunda = prompt('Qual a sua segunda cor preferida?')
  let terceira = prompt('Qual a sua terceira cor preferida?')

  cores.push(primeira)
  cores.push(segunda)
  cores.push(terceira)
  
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  recep = 'oi'
  return string.toUpperCase(recep)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let prejuizo = custo / valorIngresso
  return prejuizo
}
console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let primeiroTamanho = string1.length
  let segundoTamanho = string2.length

  let bool = primeiroTamanho == segundoTamanho
return bool
}
console.log(checaStringsMesmoTamanho())
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
let elemento = array[0]
return elemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let elemento = array.length
  let a = UltimoElemento
  let elementoDois = array[a-1]
  return elementoDois
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let funcaoOne = string1.toUpperCase()
  let FuncaoTwo = string2.toUpperCase()

  let booleano = funcaoOne == FuncaoTwo
  return booleano
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let umAno = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
    return umAno
  }
  console.log(checaAnoBissexto())

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
