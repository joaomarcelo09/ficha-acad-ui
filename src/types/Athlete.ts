import type { enumBiotipo } from "@/enum/biotipo";
import type { enumTelefone } from "@/enum/telefone";

export interface IAthlete {
    id?: number,
    nome: string,
    email: string,
    telefone: {
        tipo: enumTelefone,
        numero: string
    },
    peso: number,
    altura: number,
    biotipo: enumBiotipo,
    status: boolean
}