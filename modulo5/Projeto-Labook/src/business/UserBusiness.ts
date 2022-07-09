import { UserDataBase } from "../data/UserDataBase";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";
import { UserModel } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";


export class UserBusiness {

    public async signup(input: signupInputDTO){

        //Validações

        const {name,email,password} = input
        if(!name || !email || !password){
            throw new Error("Campos inválidos");
        }

        //Conferir se usuário existe

        const checkUser = await new UserDataBase().findUserByEmail(email)
        if(checkUser){
            throw new Error("Usuáro já cadastrado");
        }

        //Criar um id para o usuário

        const id = new IdGenerator().generate()

        //Hash o password

        const hashPassword = await new HashManager().hash(password)

        //Criar o user no DB

        const user = new UserModel(
            id,
            name,
            email,
            hashPassword
        )
        await new UserDataBase().insertUser(user)

        // Criar token

        const token = new Authenticator().generateToken({id})
        return token
    }

    public async login(input: loginInputDTO){
        
        //Validações

        const {email,password} = input
        if(!email || !password){
            throw new Error("Campos inválidos");         
        }

        //Encontrar usuário pelo email

        const user = await new UserDataBase().findUserByEmail(email)
        if(!user){
            throw new Error("Usuário não encontado");     
        }
        const hash = user.getUserInfo().password

        //Verificar a senha correta

        const checkPassword = await new HashManager().comparePasswords(password,hash)
        if(!checkPassword){
            throw new Error("Senha incorreta");
        }
        //gerar token a partir do id
        const id = user.getUserInfo().id
        const token = new Authenticator().generateToken({id})
        return token

    }
    
    public async follow(followId: string,token: string){

        // Validações

        if(!followId){
            throw new Error("Campo inválido");
        }

        if(!token){
            throw new Error("Acesso não autorizado");
        }
        // Pegar id do usuário pelo token

        const userId = new Authenticator().getTokenData(token).id

        // Verificar se existe follow

        const folowList = await new UserDataBase().findUserFollows(userId)

        folowList.map((item)=>{
            if(item.userId == userId && item.followId == followId){
                throw new Error("O usuário ja segue este perfil"); 
            }
        })

        // Armazenar follow no DB

        await new UserDataBase().insertFollow(userId,followId)

    }

    public async unfollow(followId: string,token: string){

        // Validações

        if(!followId){
            throw new Error("Campo inválido");
        }

        if(!token){
            throw new Error("Acesso não autorizado");
        }

        // Pegar id do usuário pelo token

        const userId = new Authenticator().getTokenData(token).id

        // Verificar se existe follow

        const folowList = await new UserDataBase().findUserFollows(userId)

        if(followId[0] == undefined){
            throw new Error("Usuário não está seguindo nenhum perfil");
        }

        //Desfazer follow

        await new UserDataBase().unfollowProfile(userId,followId)

    }

} 