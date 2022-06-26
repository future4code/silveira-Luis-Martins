import { User } from "./User";
import { Customer } from "./Customer";

// 1)
// const user = new User("1", "teste@gmail.com", "Teste", "123456")
// console.log(user)

// A) É possível imprimir a senha se for criado um método para a mesma senha, pq não há nenhum para 
//    o password e ele está no modo privado.

// B) A mensagem foi impressa 1x

// 2)

//const cust = new Customer("10", "cust@gmail.com", "Customer", "123456", "1111")
//console.log(cust)

// A) A mensagem foi impressa 1x
// B) A mensagem foi impressa uma vez, pq o user está inserido(extends) na classe Customer.

// 3)

// A) Seria possível imprimir a senha se no caso fosse criado um método na class User, 
//    pois as propriedades da senha são importadas da Class Mãe.

// 4)

//console.log(cust.introduceYourself())