//Exercícios de interpretação de código
//1.
//let valor = 0
//for(let i = 0; i < 5; i++) {
//  valor += i
//}
//console.log(valor)

// Resultado e 10

//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
//  if (numero > 18) {
//		console.log(numero)
//	}
//}

//2.a) Os números maior que 18.


//b)
//const lista = [10,11,12,15,18,19,21,23,25,27,30]
//for (let [index,numero] of lista.length()){
//    if(numero > 18){
//        console.log(numero,index)
//    }
//}

///////////////explicação do professor/////////////
//let indice = 0
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
// 
//    if (numero > 18) {
//		console.log(numero,'indice', indice)
//	}
//indice++
//}

//3.
//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//while(quantidadeAtual < quantidadeTotal){
 // let linha = ""
//  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//    linha += "*"
//  }
//  console.log(linha)
//  quantidadeAtual++
//}



//Exercícios de escrita de código
//1.
//const nomePets = []

//let numPet = Number(prompt('Quantos bichinhos de estimação você tem?'))
//if(numPet === 0){
//console.log("Que pena! Você pode adotar um pet!")

//}else if(numPet > 0){
//    let i = 0
//    while(i < numPet){
//        nomePets.push(prompt("Digite o nome do seus pets:"))
 //   i++;
 //   }
 //   console.log(nomePets)
//}


//2.a)
let ArrayOriginal = [23,32,39,40,43];

console.log('atividade')
for (let i = 0; i < ArrayOriginal.length; i++){
    console.log(ArrayOriginal[i]);
}

//b)
console.log('atividade')
for (let i = 0; i < ArrayOriginal.length; i++){
    let resultado = ArrayOriginal[i] / 10
    console.log(resultado);
}
//c)
console.log('atividade')

let par = [];
for (let i = 0; i < ArrayOriginal.length; i++){    
    if (ArrayOriginal[i] % 2 === 0) {
        par.push(ArrayOriginal[i])
    }
}
console.log(par)

//d)
console.log('atividade')
let element = [];
for (let i = 0; i < ArrayOriginal.length; i++){    
    let resultado = `Os elementos do index ${i} é ${ArrayOriginal[i]}`
    element.push(resultado)
}
console.log(element)

//e)
console.log('atividade')
for (let i = 0; i < ArrayOriginal.length; i++){  
    let ValorMax = Math.max(...ArrayOriginal)
    let ValorMin = Math.min(...ArrayOriginal)
    
    let resultado = `O maior número é ${ValorMax} e o menor é ${ValorMin}`
    console.log(resultado)
}


