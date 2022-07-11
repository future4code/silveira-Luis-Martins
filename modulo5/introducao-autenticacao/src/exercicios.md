Exercicio 1

a) E melhor usar String por ser mais facil e melhora a segurança, pois há possibilidades de misturar letras, numeros e caractéres especiais.

Exercicio 2

a) Está inserindo id, email, password, na tabela userTableName.

b)  CREATE TABLE introducao_autenticacao_Users (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
)

Exercicio 3 

a) Transforma em string o process.env.JWT

Exercício 7

a) Que o valor do payload será de qualquer tipo, ela precisa ser usada porque podemos enviar qualquer informação que quisermos dentro do payload.