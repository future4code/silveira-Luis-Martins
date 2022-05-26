// EXERCÍCIO 01 

// A) Se coloca numero sem as aspas da erro
const minhaString: string = 'Luis';
console.log(minhaString);

// B) Eu posso usar o any ou |
const meuNumero: number = 29;
console.log(meuNumero);

// C)
type aboutMe = {
  name: string,
  age: number,
  color: string,
}
type person = {
  name: string,
  age: number,
  color: string,
}
type personTwo = {
  name: string,
  age: number,
  color: string,
}
type personThree = {
  name: string,
  age: number,
  color: string,
}

// D)
enum colorArco {
  ver = 'vermelha',
  lar = 'laranja',
  ama = 'amarela',
  verd = 'verde',
  azu = 'azul',
  azul = 'azul-escuro',
  vio = 'violeta'
}

const aboutMeTwo = {
  name: 'Luis',
  age: 29,
  color: colorArco,
}
console.log(aboutMeTwo);