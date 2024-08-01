<!-- eslint-disable no-debugger -->
<script setup lang="ts">
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
import { onMounted, ref } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import { useAthleteStore } from '../stores/atleta'
import { enumBiotipo } from '../enum/biotipo'
import { enumTelefone } from '../enum/telefone'

const { notify } = useNotification()

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
    tipo: enumTelefone.CEL,
    numero: null
  }
})

async function validateNumber(number: string) {
  const valid = number.replace(/\D/g, '')

  if (valid.length === 11 && valid[2] === '9') {
    return enumTelefone.CEL
  } else if (valid.length === 10 && /^[2-5]/.test(valid[2])) {
    return enumTelefone.TEL
  } else {
    return 'Número inválido'
  }
}

async function createAthlete(data: any) {
  try {
    const validateNum = await validateNumber(data.telefone.numero)
    data.telefone.tipo = validateNum
    $athleteStore.atleta = data
    await $athleteStore.create()

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

onMounted(async () => {})
</script>

<template>
  <div class="body">
    <FormComponent @save-form="createAthlete(bodyAthlete)" title="Criação de Ficha">
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
