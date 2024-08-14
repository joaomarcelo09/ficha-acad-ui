<!-- eslint-disable no-debugger -->
<script setup lang="ts">
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import { useAthleteStore } from '../stores/atleta'
import { enumBiotipo } from '../enum/biotipo'
import { enumTelephone } from '../enum/telephone'
import { validateNumber } from '../helpers/validate-number'

const { notify } = useNotification()
const router = useRouter()
const route = useRoute()

const $athleteStore = useAthleteStore()

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

const bodyAthlete = ref({
  nome: '',
  altura: null,
  peso: null,
  biotipo: enumBiotipo.ECTOMORFO,
  email: '',
  telefone: {
    tipo: enumTelephone.CEL,
    numero: null
  }
})

async function getAthlete() {
  const athleteData = await $athleteStore.findOne(+route.params.id, {})

  bodyAthlete.value.biotipo = athleteData.data.biotipo
  bodyAthlete.value.altura = athleteData.data.altura
  bodyAthlete.value.email = athleteData.data.pessoa.email.email
  bodyAthlete.value.telefone = athleteData.data.pessoa.telefone
  bodyAthlete.value.peso = athleteData.data.peso
  bodyAthlete.value.nome = athleteData.data.pessoa.nome
}

async function createAthlete(data: any) {
  try {
    const validateNum = await validateNumber(data.telefone.numero)
    data.telefone.tipo = validateNum
    data.status = true
    data.peso = +data.peso
    data.altura = +data.altura
    $athleteStore.atleta = data

    if (route.params.id !== '0') {
      await $athleteStore.update(+route.params.id)
    } else await $athleteStore.create()

    notify({
      title: route.params.id !== '0' ? 'Editado com sucesso' : 'Criado com sucesso',
      type: 'success'
    })
  } catch (error) {
    notify({
      title: `${error}`,
      type: 'error'
    })
  }
}

async function exitForm() {
  router.go(-1)
}

onBeforeMount(async () => {
  if (route.params.id !== '0') {
    getAthlete()
  }
})
</script>

<template>
  <div class="body">
    <FormComponent
      @save-form="createAthlete(bodyAthlete)"
      @exit-page="exitForm"
      title="Criação de Atleta"
    >
      <template #fields>
        <FormInput v-model="bodyAthlete.nome" type="input" label="Nome do atleta" />
        <FormInput v-model="bodyAthlete.altura" type="input" label="Altura" />
        <FormInput v-model="bodyAthlete.peso" type="input" label="Peso" />
        <FormInput
          v-model="bodyAthlete.biotipo"
          type="select"
          :options-select="biotipoSelect"
          label="Biotipo"
        />
        <FormInput v-model="bodyAthlete.email" type="input" label="Email" />
        <FormInput v-model="bodyAthlete.telefone.numero" type="input" label="Telefone" />
      </template>
    </FormComponent>
  </div>
</template>

<style scoped>
.body {
  max-width: 990px;
}
</style>
../enum/telephone
