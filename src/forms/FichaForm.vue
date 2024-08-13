<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
import { useFichaStore } from '@/stores/ficha'
import { enumBiotipo } from '@/enum/biotipo'
import { useRouter, useRoute } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()
const router = useRouter()
const route = useRoute()

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

async function exitForm() {
  router.go(-1)
}

async function getFicha() {
  const fichaData = await $fichaStore.findOne(+route.params.id)

  bodyFicha.value.nome = fichaData.data.nome
  bodyFicha.value.biotipo = fichaData.data.biotipo
  bodyFicha.value.peso_minimo = fichaData.data.peso_minimo
  bodyFicha.value.peso_maximo = fichaData.data.peso_maximo
  bodyFicha.value.altura_maxima = fichaData.data.altura_maxima
  bodyFicha.value.altura_minima = fichaData.data.altura_minima
  bodyFicha.value.intensidade = fichaData.data.ficha_exercicio[0].id_intensidade
  bodyFicha.value.exercicios = fichaData.data.ficha_exercicio.map((x) => {
    return x.id_exercicio
  })
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

    if (route.params.id !== '0') {
      await $fichaStore.update(+route.params.id)
    } else await $fichaStore.create()

    notify({
      title: route.params.id !== '0' ? 'Editado com sucesso' : 'Criado com sucesso',
      type: 'success'
    })
  } catch (error) {
    notify({
      title: 'Erro na requisição',
      type: 'error'
    })
  }
}

onBeforeMount(async () => {
  await loadOptions()
  if (route.params.id !== '0') {
    getFicha()
  }
})
</script>

<template>
  <div class="body">
    <FormComponent
      @save-form="createFicha(bodyFicha)"
      @exit-page="exitForm"
      title="Criação de Ficha"
    >
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
