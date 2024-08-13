import type { IFicha } from "@/types/Ficha";
import { mudancaParametro } from "@/helpers/pagination/mudanca-request";
import type { IFindAll } from "@/types/pagination/find-all";
import { http } from "../api";
import type { AxiosResponse } from 'axios'

const router: string = 'ficha'

export async function FindAll({ page, limit, orderBy, where, select }: IFindAll): Promise<AxiosResponse> {
    let request: string = router
    request = mudancaParametro(request, { page, limit, orderBy, where, select })
    const res = await http.get(`${request}`)
    return res.data.data
}

export async function FindAllExercises() {

    const request: string = router

    return await http.get(`${request}/exercises`)

}

export async function Create(data: IFicha): Promise<AxiosResponse> {
    return await http.post(`${router}`, data)
}

export async function Update(data: IFicha, id: number): Promise<AxiosResponse> {
    return await http.patch(`${router}/${id}`, data)
}

export async function FindById(id: string | number): Promise<AxiosResponse> {
    return await http.get(`${router}/${id}`)
}

export async function Delete(id: string | number): Promise<AxiosResponse> {
    return await http.delete(`${router}/${id}`)
}