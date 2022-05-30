const operacao = process.argv[2]

const numeroUm = +process.argv[3]

const numeroDois = +process.argv[4]

switch(operacao) {
    case "add": 
    console.log(`${numeroUm + numeroDois}`)
    break;
    case "sub": 
    console.log(`${numeroUm - numeroDois}`)
    break;
    case "mult": 
    console.log(`${numeroUm * numeroDois}`)
    break;
    case "div": 
    console.log(`${numeroUm / numeroDois}`)
    break;
}
