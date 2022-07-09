import {Request,Response} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { loginInputDTO } from "../types/loginInputDTO"
import { signupInputDTO } from "../types/signupInputDTO"


export class UserController {

    public async signup(req: Request,res: Response){

        const {
            name,
            email,
            password} = req.body

        const input: signupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await new UserBusiness().signup(input)

            res.status(201).send({message: "usuário cadastrado com sucesso", token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    public async login(req: Request,res: Response){

        const {email,password} = req.body
        const input: loginInputDTO = {

            email,
            password
        }
        try {
            const token = await new UserBusiness().login(input)
            res.status(201).send({message: "Usuário encontrado", token})
        }catch (error: any) {
            res.status(400).send(error.message)
        }

    }

    public async follow(req: Request,res: Response){

        const id = req.params.id
        const token = String(req.headers.auth)

        try {

            await new UserBusiness().follow(id,token)
            res.status(201).send("Amizade feita com sucesso")

        } catch (error: any) {
            res.status(400).send(error.message)
        }

    }

    public async unfollow(req: Request,res: Response){

        const id = req.params.id
        const token = String(req.headers.auth)

        try {

            await new UserBusiness().unfollow(id,token)
            res.status(201).send("Amizade desfeita com sucesso")

        } catch (error: any) {
            res.status(400).send(error.message)
        }

    }


} 