import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import express, {  Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



app.post("/user", async (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Por gentileza preencha os campos acima")
        }
        await connection("Users")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,

            });

        res.status(200).send(`Usuário Criado!`);
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message);
    };
});


  app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const usuario = await connection("Users")
        .where("id", req.params.id)
        res.status(200).send({usuario})
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})


app.put("/users/edit/:id", async (req: Request, res: Response) => {
    try {
        const editaUsuario = await connection(`Users`)
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where({ id: req.params.id })

        res.status(200).send(`${editaUsuario} Usuário editado com sucesso`)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Usuário não foi alterado")
    }
})

app.get("/", async (req, res) => {
    try {
        const result =
        await connection.raw(`
        SELECT * FROM TodoListTask
        `)
        res.status(200).send(result[0])
    } catch (error: any){
        res.status(500).send(error.message)
    }
})


app.post("/task", async (req: Request, res: Response) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.createUserId || !req.body.createNickname) {
            throw new Error("Por gentileza preencha os campos acima!")
        }
        await connection("Tarefas")
            .insert({
                createUserId: Date.now(),
                title: req.body.title,
                description: req.body.description,
                limitDate: req.body.limitDate,
                createNickname:req.body.createNickname

            });

        res.status(200).send(`Tarefa criada com sucesso!`);
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message);
    };
});

