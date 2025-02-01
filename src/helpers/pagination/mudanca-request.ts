import type { IFindAll } from "@/types/pagination/find-all"

export function mudancaParametro(url: string, { page, limit, orderBy, where, select, include }: IFindAll) {
    if (page || limit || orderBy || where || select || include) {
        url += '?'
        const mudancaUrl = (variavel: any, envio: any) => {
            if (variavel) {
                url += `${envio}=${variavel}&`
            }
        }
        const mudancaObject = (variavel: any, envio: any) => {
            if (variavel) {
                url += `${envio}=${JSON.stringify(variavel)}&`
            }
        }
        mudancaUrl(page, 'page')
        mudancaUrl(limit, 'limit')
        mudancaObject(orderBy, 'orderBy')
        mudancaObject(where, 'where')
        mudancaObject(select, 'select')
        mudancaObject(include, 'include')
    }
    return url
}