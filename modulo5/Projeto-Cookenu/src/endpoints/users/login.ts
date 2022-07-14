import {Request, Response} from "express"
import connection from "../../connection"
import { userTableName } from "../../types"

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const {email, password} = req.body

        const [user] = await connection(userTableName)
    } catch(error){
        // console.log(error.message);
        res.status(500).send("Internal server error")
    }
}