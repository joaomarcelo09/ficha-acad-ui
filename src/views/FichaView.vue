<script setup lang="ts">
import List from '@/components/List.vue'
import { useFichaStore } from '@/stores/ficha'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getRowsByJson } from '@/utils/List'

const router = useRouter()
const $fichaStore = useFichaStore()

const gettedByStore = ref([])
const searchValue = ref('')
const pagination = ref({
  currentPage: 1,
  totalPages: 1
})

const fieldsSelected = [
  'id',
  'nome',
  'altura_minima',
  'altura_maxima',
  'peso_minimo',
  'peso_maximo',
  'biotipo'
]
const columns = [
  'Id',
  'Nome',
  'Altura mínima',
  'Altura máxima',
  'Peso mínimo',
  'Peso máximo',
  'Biotipo',
  'Ações'
]

const rows = computed(() => getRowsByJson(gettedByStore.value, fieldsSelected))

const fetchData = async (opt?: any) => {
  const limit = opt?.rowsPerPage || 6
  const page = opt?.page || 1
  const where = {
    nome: {
      contains: searchValue.value
    }
  }

  const data = await $fichaStore.findAll({ limit, page, where })

  gettedByStore.value = data.rows
  pagination.value.totalPages = Math.ceil(data.count / limit)
  pagination.value.currentPage = page
}

const openCreate = () => {
  router.push('form/0')
}

const openEdit = (item: number) => {
  router.push(`form/${item}`)
}

const onClickDelete = async (id: string) => {
  await $fichaStore.delete(+id)
  await fetchData()
}

const onPageChanged = (page: number) => {
  fetchData({ page })
}

const onClickSearch = (search: string) => {
  searchValue.value = search
  fetchData()
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
      @open-edit="openEdit"
      @open-delete="onClickDelete"
      @search="onClickSearch"
      :rows="rows"
      :columns="columns"
      :pagination="pagination"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<style scoped></style>
