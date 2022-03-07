//Exercícios de interpretação de código
//1.
//const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" }
//  ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) Imprimiu todos os dados "item, index e array".

//2.
//   const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ] 
//  const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//  })
//   console.log(novoArrayB)

//  a) Somente os itens "nome" foram impressos

//3.
// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
 
//  const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
//  })
 
//  console.log(novoArrayC)

 //a) Excluiu o usuario Chijo



 // Exercícios de escrita de código//
//1.
// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]


// const NomeDog = (item) => {
//     return item.nome
// }
// let FiltrarNomes = pets.map(NomeDog)
// console.log(FiltrarNomes)


// const Salsicha = (item) => {
//     return item.raca == 'Salsicha'
// }
// const Filter = pets.filter(Salsicha)
// console.log(Filter)


// const Poodle = (item) => {
//     if (item.raca == 'Poodle'){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
//     }
// }
// const cachorro = pets.map(Poodle)


// //2.
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// //a)
// const Name = (item) => {
//    return item.nome
// }
// let cadaItem = produtos.map(Name)
// console.log(cadaItem)

// //b)
// function desc(number) {
//    return number.preco * (95/100)
// }
// const resultado = produtos.map(desc) 
// console.log(resultado)

// //c)
// const bebidas = (item) => {
//    return item.categoria == 'Bebidas'
// }
// let FiltrarBebidas = produtos.filter(bebidas)
// console.log(FiltrarBebidas)

// //d)
// const Ype = (item) => {
//    return item.nome.includes('Ypê')
// }

// const Includes = produtos.filter(Ype)
// console.log(Includes)


// //e.)

// const imprimir = (item) => {
//    if (item.nome.includes('Ypê')){
//        console.log(`Compre ${item.nome} por ${item.preco} `)
//    }        
// }
// const Teste = produtos.map(imprimir)
