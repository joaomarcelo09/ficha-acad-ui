import type { enumBiotipo } from "@/enum/biotipo";

export interface IFicha {
    id?: number,
    nome: string,
    altura_minima: number,
    altura_maxima: number,
    peso_minimo: number,
    peso_maximo: number,
    biotipo: enumBiotipo
    exercicios: [
        {
            id_exercicio: number,
            id_intensidade: number
        }
    ]
}