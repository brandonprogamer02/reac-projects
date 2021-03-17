import axios, { } from 'axios'
import { AxiosError } from 'axios'

export type { AxiosError }

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
})


export default axiosClient


