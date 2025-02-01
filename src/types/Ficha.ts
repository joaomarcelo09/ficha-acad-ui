import type { enumBiotipo } from "@/enum/biotipo";

export interface IFicha {
    id?: number,
    nome: string,
    altura_minima: number | null,
    altura_maxima: number | null,
    peso_minimo: number | null,
    peso_maximo: number | null,
    biotipo: enumBiotipo
    exercicios: [
        {
            id_exercicio: number,
            id_intensidade: number
        }
    ]
}