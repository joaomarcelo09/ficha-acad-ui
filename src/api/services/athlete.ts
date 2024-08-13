import { http } from "../api";
import type { AxiosResponse } from 'axios'
import type { IAthlete } from "@/types/Athlete";
import { mudancaParametro } from "@/helpers/pagination/mudanca-request";
import type { IFindAll } from "@/types/pagination/find-all";

const router: string = 'atleta'

export async function FindAll({ page, limit, orderBy, where, select, include }: IFindAll): Promise<AxiosResponse> {
    let request: string = router
    request = mudancaParametro(request, { page, limit, orderBy, where, select, include })
    const res = await http.get(`${request}`)
    return res.data.data
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

export async function FindById(id: string | number, { page, limit, orderBy, where, select, include }: IFindAll): Promise<AxiosResponse> {
    let request: string = router + `/${id}`
    request = mudancaParametro(request, { page, limit, orderBy, where, select, include })
    const res = await http.get(`${request}`)
    return res
}

export async function Delete(id: string | number): Promise<AxiosResponse> {
    return await http.delete(`${router}/${id}`)
}