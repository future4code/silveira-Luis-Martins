import app from "./app"
import editUser from './endpoints/editUser'
import {createUser} from './endpoints/createUser'
import { getUser } from "./endpoints/getUser"
import { login } from "./endpoints/login"


app.get("/user/profile", getUser)
app.post("/user/signup", createUser)
app.post("/user/login", login) 
app.put('/user/edit/:id', editUser)