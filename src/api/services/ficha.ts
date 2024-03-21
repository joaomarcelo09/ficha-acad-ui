import { http } from "../api";
import type { AxiosResponse } from 'axios'

const router = 'ficha'

export async function FindAll(data?:any) {

    const request: string = router

    return await http.get(`${request}`)
    
}