import { defineStore } from 'pinia'
import * as $Sficha from '../api/services/ficha'
import { enumBiotipo } from '@/enum/biotipo'
import type { IFindAll } from '@/types/pagination/find-all'
import type { IFicha } from '@/types/Ficha'

export const useFichaStore = defineStore('ficha', {

  state: () => {
    return {
      ficha: {
        nome: 'ficha menininha',
        altura_minima: 140,
        altura_maxima: 154,
        peso_minimo: 45,
        peso_maximo: 55,
        biotipo: enumBiotipo.ECTOMORFO,
        exercicios: [
          {
            id_exercicio: 1,
            id_intensidade: 1
          }
        ]
      } as IFicha
    }
  },

  actions: {
    async findAll({ limit, page, select, orderBy, where }: IFindAll): Promise<any> {
      try {
        if (Object.entries(where).length == 0) {
          where = null
        }
        return await $Sficha.FindAll({ limit, page, select, orderBy, where })
      } catch (error) {
        console.log(error)
        return error
      }
    },

    async findAllExercises() {
      try {
        return await $Sficha.FindAllExercises()

      } catch (error) {
        console.log(error)
        return error
      }
    },

    async create() {
      try {
        return await $Sficha.Create(this.ficha)
      } catch (error) {
        return error
      }
    },

    async update(id: number) {
      try {
        return await $Sficha.Update(this.ficha, id)
      } catch (error) {
        return error
      }
    },

    async delete(id: number) {
      try {
        return await $Sficha.Delete(id)
      } catch (error) {
        return error
      }
    },

    async findOne(id: number): Promise<any> {

      try {
        return await $Sficha.FindById(id)
      } catch (error) {
        return error
      }

    }
  },
})