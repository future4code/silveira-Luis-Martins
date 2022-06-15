Exercício 1


A)
Retirar a columa de salário da tabela

B)
Altera aquela coluna da tabela, alteraria o nome de gender para sex com VARCHAR(6)

C)
A coluna gender, deixando o VARCHAR dela com (255)

D)
ALTER TABLE Actor CHANGE gender gender VARCHAR (100) NOT NULL;


Exercício 2


A)
UPDATE Actor
SET 
    name = "Tony Ramos",
    birth_date = "1999-09-09"  
WHERE id = "003"

B)
UPDATE Actor
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES" 

C)
UPDATE Actor
SET 
    name = "teste",
    birth_date = "1997-12-15",
    salary = 400000,
    gender = "female"
WHERE id = "001";

D)
O retorno é que o código funcionou mas 0 linhas foram alteradas

Exercício 3


A)
DELETE FROM Actor WHERE name = "Tony da Friboi"

B)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

Exercício 4


A)
SELECT MAX(salary) FROM Actor

B)
SELECT MIN(salary) FROM Actor gender = "female"

C)
SELECT COUNT(*) FROM Actor WHERE gender = "female"

D)
SELECT SUM(salary) FROM Actor

Exercício 5


A)
A query retorna os valores que estão naquela coluna e as quantidade de vezes que esse mesmo valor se repete

B)
SELECT id, name FROM Actor
ORDER BY name DESC;

C)
SELECT * FROM Actor
ORDER BY salary;

D)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

E)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

Exercício 6


A)
ALTER TABLE Movie ADD playing_limit_date DATE;

B)
ALTER TABLE Movie CHANGE rating rating FLOAT;

C)
UPDATE Movie
SET
	playing_limit_date = "2022-02-22"
WHERE id = "001"
UPDATE Movie
SET
	playing_limit_date = "2022-05-02"
WHERE id = "002";

D)
DELETE FROM Movie WHERE id = "003"