import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"


const senhaCriptografada = new HashManager().createHash("test")

console.log(senhaCriptografada)

const compare = new HashManager().compareHash("testando", senhaCriptografada)

console.log(compare)

app.post('/user/signup', createUser)

app.post('/user/login', login)
