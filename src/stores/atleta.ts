import { defineStore } from 'pinia'
import * as $SAtleta from '../api/services/athlete'
import { enumBiotipo } from '@/enum/biotipo'
import type { IAthlete } from '@/types/Athlete'
import { enumTelephone } from '@/enum/telephone'

export const useAthleteStore = defineStore('athlete', {

    state: () => {
        return {
            atleta: {
                nome: '',
                email: '',
                telefone: {
                    tipo: enumTelephone.CEL,
                    numero: ''
                },
                peso: 60,
                altura: 180,
                biotipo: enumBiotipo.ECTOMORFO,
                status: true
            } as IAthlete
        }
    },

    actions: {
        async findAll() {
            try {

                return await $SAtleta.FindAll()

            } catch (error) {
                console.log(error)
                return error
            }
        },

        async create() {
            try {
                return await $SAtleta.Create(this.atleta)
            } catch (error) {
                return error
            }
        },

        async update(id: number) {
            try {
                return await $SAtleta.Update(this.atleta, id)
            } catch (error) {
                return error
            }
        },

        async delete(id: number) {
            try {
                return await $SAtleta.Delete(id)
            } catch (error) {
                return error
            }
        },

        async findOne(id: number) {

            try {
                return await $SAtleta.FindById(id)
            } catch (error) {
                return error
            }

        }
    },


})