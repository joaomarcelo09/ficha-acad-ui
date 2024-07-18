<script setup lang="ts">
import List from '@/components/List.vue'
import { useFichaStore } from '@/stores/ficha'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getRowsByJson, getColumnsByJson } from '@/utils/List'

const router = useRouter()
const $fichaStore = useFichaStore()

const gettedByStore = ref([
  {
    id: 13,
    nome: 'aaa',
    altura_minima: 10,
    altura_maxima: 10,
    peso_minimo: 10,
    peso_maximo: 10,
    biotipo: 'ectomorfo',
    ficha_exercicio: [
      {
        id: 103,
        id_exercicio: 1,
        id_intensidade: 1,
        id_ficha: 13
      },
      {
        id: 104,
        id_exercicio: 1,
        id_intensidade: 1,
        id_ficha: 13
      }
    ],
    ficha_atleta: [
      {
        id: 18,
        id_atleta: 23,
        id_ficha: 13
      }
    ]
  },
  {
    id: 14,
    nome: 'nova ficha1',
    altura_minima: 155,
    altura_maxima: 165,
    peso_minimo: 45,
    peso_maximo: 55,
    biotipo: 'mesomorfo',
    ficha_exercicio: [
      {
        id: 123,
        id_exercicio: 1,
        id_intensidade: 2,
        id_ficha: 14
      }
    ],
    ficha_atleta: []
  },
  {
    id: 15,
    nome: 'ficha menininha',
    altura_minima: 140,
    altura_maxima: 154,
    peso_minimo: 45,
    peso_maximo: 55,
    biotipo: 'endomorfo',
    ficha_exercicio: [],
    ficha_atleta: []
  }
])

const pages = ref([1, 2, 3])

const fieldsSelected = [
  'nome',
  'altura_minima',
  'altura_maxima',
  'peso_minimo',
  'peso_maximo',
  'biotipo'
]
const columns = ['Nome', 'Altura mínima', 'Altura máxima', 'Peso mínimo', 'Peso máximo', 'Biotipo']

const rows = computed(() => getRowsByJson(gettedByStore.value, fieldsSelected))

const openCreate = () => {
  router.push('form')
}

onMounted(async () => {
  await $fichaStore.findAll()
})
</script>

<template>
  <div class="body">
    <List
      title="Ficha"
      @open-create="openCreate"
      :rows="rows"
      :columns="columns"
      :pagination="pages"
    />
  </div>
</template>

<style scoped>
.body {
  margin-top: 10rem;
  margin-left: 1%;
  width: 98%;
}
</style>
