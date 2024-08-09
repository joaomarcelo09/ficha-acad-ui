<script setup lang="ts">
import List from '@/components/List.vue'
import { useFichaStore } from '@/stores/ficha'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getRowsByJson, getColumnsByJson } from '@/utils/List'

const router = useRouter()
const $fichaStore = useFichaStore()

const gettedByStore = ref([])
const pagination = ref({
  currentPage: 1,
  totalPages: 1
})

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

const fetchData = async (opt?) => {
  const limit = opt?.rowsPerPage || 6
  const page = opt?.page || 1
  const where = {}

  const data = await $fichaStore.findAll({ limit, page, where })

  gettedByStore.value = data.rows
  pagination.value.totalPages = Math.ceil(data.count / limit)
  pagination.value.currentPage = page
}

const openCreate = () => {
  router.push('form')
}

const onPageChanged = (page: number) => {
  fetchData({ page })
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div class="body">
    <List
      title="Ficha"
      @open-create="openCreate"
      :rows="rows"
      :columns="columns"
      :pagination="pagination"
      @page-changed="onPageChanged"
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
