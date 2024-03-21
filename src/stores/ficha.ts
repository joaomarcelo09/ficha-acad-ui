import { defineStore } from 'pinia'
import * as $Sficha from '../api/services/ficha'

export const useFichaStore = defineStore('ficha', {

    state: () => {
        return {
            fichas: [{
                nome: 'ficha de Joao Marcelo',
                data: '16/01/2024',
                status: 'Malhando'
            },
            {
                nome: 'ficha de Julia de Moraes',
                data: '16/01/2024',
                status: 'Malhando'
            }
        ]
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
      },


})