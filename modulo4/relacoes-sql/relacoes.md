Exercicio 1


A)
É uma key que relaciona as duas tabelas


B)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Muito bom esse Filme",
    9,
		"004"
);

Select * FROM Movie


C)
Da erro por não encontrar nenhum filme com esse mesmo id para relacionar o comentário


D)
ALTER TABLE Movie DROP COLUMN rating;

E)
Da erro pois existe uma avaliação fixada a esse filme, para apagar o filme é necessário apagar a avaliação também


Exercicio 2


A)
É uma tabela que pega o ator e o filme e relaciona os dois, "ator x e y no filme N"

B)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "2"
)

C)
<p> Da erro por não encontrar nenhum ator/filme para relacionar </p>

D)
Da erro pois existe um filme fixado a esse ator, para apagar o ator, é necessário apagar o filme também


Exercicio 3


A)
O operador ON é como se fosse a junção, que contenha

B)
SELECT m.id as movie_id, r.rate as rating FROM Movie m INNER JOIN Rating r ON m.id = r.movie_id;

C)
SELECT Movie.id, Movie.title, Rating.rate
FROM Movie
JOIN Rating
ON Movie.id = Rating.movie_id