// Exercício 10
import { validate } from 'gerador-validador-cpf'

function cpfNumber(dados:string){
  const verifica = validate(dados)

  return verifica
}
console.log(cpfNumber('697.969.580-07'));