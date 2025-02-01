import type { enumBiotipo } from "@/enum/biotipo";
import type { enumTelephone } from "@/enum/telephone";

export interface IAthlete {
    id?: number,
    nome: string,
    email: string,
    telefone: {
        tipo: enumTelephone,
        numero: string
    },
    peso: number,
    altura: number,
    biotipo: enumBiotipo,
    status: boolean
}