import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function createUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const {id , name, email, password} = req.body

      await connection("labecommerce_users")
      .insert({id , name, email, password})

      
   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}