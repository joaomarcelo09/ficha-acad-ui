import { defineStore } from 'pinia'
import * as $Sficha from '../api/services/ficha'
import type { IFindAll } from '@/types/pagination/find-all'
import type { IFicha } from '@/types/ficha/ficha'

export const useFichaStore = defineStore('ficha', {

  state: () => {
    return {
      fichas: [{
        id: 15,
        nome: 'ficha menininha',
        altura_minima: 140,
        altura_maxima: 154,
        peso_minimo: 45,
        peso_maximo: 55,
        biotipo: 'endomorfo',
        ficha_exercicio: [],
        ficha_atleta: []
      }] as IFicha[]
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
  },


})