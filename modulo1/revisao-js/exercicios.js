// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function crescente(a,b){ 
    return (a-b) 
  }
  function retornaArrayOrdenado(array) {
    return array.sort(crescente) 
  }

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
    for (let i = 0; i <= array.length; i++){
      if (array[i] % 2 == 0){
        par.push(array[i])
      }
    }
    return par
  }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let elevado = []
 for (let i = 0; i <= array.length; i++){
     if (array[i] % 2 == 0){
         elevado.push(array[i]**2)
     }
 }
return elevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = 0
  for (let item of array) {
      if (item > numeroMaior){
          numeroMaior = item 
      }
  }
return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let par = []
    for (let i = 0; i < n ; i++){
        par.push(i*2)
    }
    return par
  }

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const catalogo = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    } 
  
      let resultado = `Venha assistir ao filme ${catalogo.nome}, de ${catalogo.ano}, dirigido por ${catalogo.diretor} e estrelado por ${catalogo.atores[0]}, ${catalogo.atores[1]}, ${catalogo.atores[2]}, ${catalogo.atores[3]}.`
    
      return resultado 
  }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}