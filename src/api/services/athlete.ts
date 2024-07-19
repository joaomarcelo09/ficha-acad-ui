import { http } from "../api";
import type { AxiosResponse } from 'axios'
import type { IAthlete } from "@/types/Athlete";

const router: string = 'atleta'

export async function FindAll() {

    const request: string = router

    return await http.get(`${request}`)

}

export async function Create(data: IAthlete): Promise<AxiosResponse> {
    return await http.post(`${router}`, data)
}

export async function Update(data: IAthlete, id: number): Promise<AxiosResponse> {
    return await http.post(`${router}/${id}`, data)
}

export async function Revaluation(data: IAthlete, id: number): Promise<AxiosResponse> {
    return await http.post(`${router}/${id}`, data)
}

export async function FindById(id: string | number): Promise<AxiosResponse> {
    return await http.get(`${router}/${id}`)
}

export async function Delete(id: string | number): Promise<AxiosResponse> {
    return await http.delete(`${router}/${id}`)
}