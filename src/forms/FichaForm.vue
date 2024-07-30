<!-- eslint-disable no-debugger -->
<script setup lang="ts">
import { ref } from 'vue'
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
import { useFichaStore } from '@/stores/ficha'
import { enumBiotipo } from '@/enum/biotipo'
import type { IFicha } from '@/types/Ficha'

const $fichaStore = useFichaStore()
const bodyFicha = ref({
  nome: '',
  altura_minima: null,
  altura_maxima: null,
  peso_minimo: null,
  peso_maximo: null,
  biotipo: enumBiotipo.ECTOMORFO,
  intensidade: 1,
  exercicios: []
})

const biotipoSelect = ref([
  {
    value: enumBiotipo.ECTOMORFO,
    label: 'Ectomorfo'
  },
  {
    value: enumBiotipo.MESOMORFO,
    label: 'Mesomorfo'
  },
  {
    value: enumBiotipo.ENDOMORFO,
    label: 'Endomorfo'
  }
])

const exerciciosSelect = ref([
  {
    value: 1,
    label: 'Baixa'
  },
  {
    value: 2,
    label: 'Média'
  },
  {
    value: 3,
    label: 'Alta'
  }
])

const intensidadeSelect = ref([
  {
    value: 1,
    label: 'Baixa'
  },
  {
    value: 2,
    label: 'Média'
  },
  {
    value: 3,
    label: 'Alta'
  }
])

async function createFicha(bodyFicha: any) {
  const mappedExercicios = bodyFicha.exercicios.map((id: number) => ({
    id_exercicio: id,
    id_intensidade: bodyFicha.intensidade
  }))

  const updatedBodyFicha = {
    ...bodyFicha,
    exercicios: mappedExercicios
  }

  $fichaStore.ficha = updatedBodyFicha
  await $fichaStore.create()
}
</script>

<template>
  <div class="body">
    <FormComponent @save-form="createFicha(bodyFicha)" title="Criação de Ficha">
      <template #fields>
        <FormInput v-model="bodyFicha.nome" type="input" label="Nome da ficha" />
        <FormInput v-model.number="bodyFicha.altura_minima" type="input" label="Altura mínima" />
        <FormInput v-model.number="bodyFicha.altura_maxima" type="input" label="Altura máxima" />
        <FormInput v-model.number="bodyFicha.peso_minimo" type="input" label="Peso mínimo" />
        <FormInput v-model.number="bodyFicha.peso_maximo" type="input" label="Peso máximo" />
        <FormInput
          v-model="bodyFicha.biotipo"
          type="select"
          :options-select="biotipoSelect"
          label="Biotipo"
        />
        <FormInput
          v-model="bodyFicha.exercicios"
          type="select"
          :options-select="exerciciosSelect"
          multi-select
          label="Exercícios"
        />
        <FormInput
          v-model="bodyFicha.intensidade"
          type="select"
          :options-select="intensidadeSelect"
          label="Intensidade"
        />
      </template>
    </FormComponent>
  </div>
</template>

<style scoped>
.body {
  max-width: 990px;
}
</style>
