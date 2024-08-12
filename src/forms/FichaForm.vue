<!-- eslint-disable no-debugger -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
import { useFichaStore } from '@/stores/ficha'
import { enumBiotipo } from '@/enum/biotipo'
import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

const intensidadeSelect = ref([])
const exerciciosSelect = ref([])

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

async function loadOptions() {
  const options: any = await $fichaStore.findAllExercises()

  exerciciosSelect.value = options.data.dataExer.rows.map((x: any) => ({
    value: x.id,
    label: x.titulo
  }))

  intensidadeSelect.value = options.data.dataInt.rows.map((x: any) => ({
    value: x.id,
    label: `${x.serie}x${x.repeticao}`
  }))
}

async function createFicha(bodyFicha: any) {
  try {
    const mappedExercicios = bodyFicha.exercicios.map((id: number) => ({
      id_exercicio: Number(id),
      id_intensidade: Number(bodyFicha.intensidade)
    }))

    const updatedBodyFicha = {
      ...bodyFicha,
      exercicios: mappedExercicios
    }

    $fichaStore.ficha = updatedBodyFicha

    await $fichaStore.create()

    notify({
      title: 'Criado com sucesso',
      type: 'success'
    })
  } catch (error) {
    notify({
      title: 'Erro na requisição',
      type: 'error'
    })
  }
}

onMounted(async () => {
  await loadOptions()
})
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
          v-model="bodyFicha.intensidade"
          type="select"
          :options-select="intensidadeSelect"
          label="Intensidade"
        />
        <FormInput
          v-model="bodyFicha.exercicios"
          type="select"
          :options-select="exerciciosSelect"
          multi-select
          label="Exercícios"
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
