import axios from 'axios'
import { apiKey } from "../env"

const baseURL = 'https://api.nytimes.com/svc/books/v3/'; 
const api = axios.create({
    baseURL,
    timeout: 10000, // Defina o tempo limite da sua solicitação (opcional)
  });


export const apiList = async () => {
    try {
        const params = `?list=hardcover-fiction&api-key=${apiKey}`
        const response = await api.get(`lists.json${params}`)
        return response.data
    } catch (error) {
            console.error(error)
            return []
    }
}