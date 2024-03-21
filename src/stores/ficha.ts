import { defineStore } from 'pinia'

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
    }
})