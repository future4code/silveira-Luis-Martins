import * as jwt from "jsonwebtoken"

export interface AuthenticationData {
    id: string
}

export class Authenticator {

    public generateToken(input: AuthenticationData): string{
        const token = jwt.sign(
            input,
            String(process.env.JWT_KEY),
            {
                expiresIn: process.env.AUTH_EXPIRES_IN
            }
        )

        return token
    }

    public getTokenData(token: string): AuthenticationData{
        const data = jwt.verify(token, String(process.env.JWT_KEY))
        return data as AuthenticationData
    }
} 