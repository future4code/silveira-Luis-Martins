/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log('Bem-vindo ao jogo de blackjack');

if(confirm('Quer iniciar o jogo?')) {

   const usuario1 = comprarCarta(); 
   const usuario2 = comprarCarta(); 
   const computador1 = comprarCarta(); 
   const computador2 = comprarCarta(); 


   const somaUser = usuario1.valor + usuario2.valor
   const somaMaquina = computador1.valor + computador2.valor


   console.log(`Usuário: cartas: ${usuario1.texto} e ${usuario2.texto} -- pontuação ${somaUser} `);
   console.log(`Computador: cartas: ${computador1.texto} e ${computador2.texto} -- pontuação ${somaMaquina} `);

   if (somaMaquina > somaUser){
      console.log('Computador ganhou!')
   }
   else if (somaUser > somaMaquina){
      console.log('Usuário ganhou!')
   }
   else if (somaMaquina == somaUser){
      console.log('Empate!')
   }
  
} else {
	console.log('O jogo acabou');
}