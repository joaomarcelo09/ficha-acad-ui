import { mudancaParametro } from "@/helpers/pagination/mudanca-request";
import type { IFindAll } from "@/types/pagination/find-all";
import { http } from "../api";
import type { AxiosResponse } from 'axios'

const router = 'ficha'

export async function FindAll({ page, limit, orderBy, where, select }: IFindAll): Promise<AxiosResponse> {
    let request: string = router
    request = mudancaParametro(request, { page, limit, orderBy, where, select })
    const res = await http.get(`${request}`)
    return res.data.data
}