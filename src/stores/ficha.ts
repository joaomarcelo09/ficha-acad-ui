import { defineStore } from 'pinia'
import * as $Sficha from '../api/services/ficha'
import { enumBiotipo } from '@/enum/biotipo'
import type { IFicha } from '@/types/Ficha'

export const useFichaStore = defineStore('ficha', {

  state: () => {
    return {
      ficha: {
        nome: '',
        altura_minima: 150,
        altura_maxima: 180,
        peso_minimo: 40,
        peso_maximo: 60,
        biotipo: enumBiotipo.ECTOMORFO,
        exercicios: [{
          id_exercicio: 1,
          id_intensidade: 1
        }]
      } as IFicha
    }
  },

  actions: {
    async findAll() {
      try {

        return await $Sficha.FindAll()

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

    async findOne(id: number) {

      try {
        return await $Sficha.FindById(id)
      } catch (error) {
        return error
      }

    }
  },


})