import axios from 'axios'
import { baseURL } from './baseURL';


// A) Não
// B) Para deixar o código mais completo evitando erros


type user = {
    id: string;
    name: string;
    email: string;
}



const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    console.log(response.data)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    });
};

const main = async () => {
    try {
        await getSubscribers()

    } catch (error: any) {
        console.log(error.response?.data || error.mesage)
    }
}

main()
