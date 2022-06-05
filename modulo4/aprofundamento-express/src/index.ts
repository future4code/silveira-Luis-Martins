import express from "express";
import cors from "cors";
import { afazeres } from "./data";

const app = express();

//Dados backend -> frontend no formato JSON.
app.use(express.json());

//API sem erro de CORS.
app.use(cors());

app.get('/ping', (request, response) => {
    response.send('Pong! 🏓')
});

app.get('/afazeres', (request, response) => {
    const done = afazeres.filter((item) => {
        return item.completed == true
    })
    const sucesso = {
        message: 'Tarefa concluída ✔',
        done: done
    }
    response.send(sucesso)
});

type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

app.post('/novaAfazeres', (request, response) => {
    const users: number = Number(request.headers.authorization)
    const titleTask = request.body.title
    const id = afazeres.length + 1

    const novaAfazeres: Afazeres = {
        userId: users,
        id: id,
        title: titleTask,
        completed: request.body.completed
    }
    afazeres.push(novaAfazeres)
    response.send(afazeres)
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
}); 