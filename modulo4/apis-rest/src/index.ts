import express from "express"
import { users, Users } from "./users";

const app = express();

app.use(express.json());

const porta = 3003

const server = app.listen(porta, () => {
    if (server) {
        console.log(`Server is running in http://localhost:${porta}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})

//------------------------------------------------------------//test//

app.get("/test", (req, res) => {
    return res.status(200).json({ message: "Test aprovado" })
})

//------------------------------------------------------------//listUsers//


app.get("/users", (req, res) => {
    let codeError: number = 400
    try {
        const list = users.map((user) => {
            return user
        })

        if(!list) {
            codeError = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(list)
    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }

})


//------------------------------------------------------------//user//


app.get("/user", (req, res) => {
    let codeError: number = 400
    try {
        const name:string = req.query.name as string
        const user = users.find((user) => {
            return user.name === name
        })

        if(!user){
            codeError = 404
            throw new Error ("Nenhum usuário encontrado, informe um usuario valido.")
        }

        res.status(200).send(user)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

//------------------------------------------------------------//filterAdm//

app.get("/users/:type", (req, res) => {
    let codeError: number = 400
    try {
        const type: string = req.params.type.toLowerCase() as string

        console.log(req.params)

        const filterType = users.filter((user) => {
            return user.type.toLowerCase() === type
        })

        const typerFiltrado = filterType.map((user) => {
            return user
        })

        if (typerFiltrado.length === 0){
            codeError = 404
            throw new Error ("Confira se o valor passado e Adm ou Usuario.")
        }

        res.status(200).send(typerFiltrado)

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

//------------------------------------------------------------//userAdd//

app.post("/users/add", (req, res) => {
    let codeError: number = 400
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error("Verifique se os dados estao corretos")
        }
        
        const newUser: Users = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(201).send({message:"Usuário criado com sucesso"})

    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }

})









