// a) Recebo a variavel a partir do process.argv[2]

// -------- Exercício 1 ---------- 
//b)
const name = process.argv[2]

const age = +process.argv[3]

const newAge = age

if (name && age){
    const msg = `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge + 7}`
    console.log('\033[34m', msg)
} else {
    console.log("\033[34m error")
}


// console.log(`Olá, ${name}! Você tem ${age} anos.`)
// //c)

// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge + 7}`)

