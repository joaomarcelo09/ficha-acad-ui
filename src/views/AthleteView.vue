<script setup lang="ts">
import List from '@/components/List.vue'
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { getRowsByJson } from '@/utils/List'
import { useRouter } from 'vue-router'
import { useAthleteStore } from '@/stores/atleta'

const router = useRouter()
const pagination = ref({
  currentPage: 1,
  totalPages: 1
})
const gettedByStore = ref([])
const $athleteStore = useAthleteStore()
const searchValue = ref('')

const fieldsSelected = ['id', 'altura', 'peso', 'nome', 'biotipo']
const columns = ['Id', 'Altura', 'Peso', 'Biotipo', 'Nome', 'Ações']

const rows = computed(() => getRowsByJson(gettedByStore.value, fieldsSelected))

const fetchData = async (opt?: any) => {
  const limit = opt?.rowsPerPage || 6
  const page = opt?.page || 1
  const include = {
    pessoa: true
  }
  const where = {
    pessoa: {
      nome: {
        contains: searchValue.value
      }
    }
  }

  const data = await $athleteStore.findAll({ limit, page, where, include })

  data.rows = data.rows.map((x) => ({
    ...x,
    nome: x.pessoa.nome
  }))

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
  await $athleteStore.delete(+id)
  await fetchData()
}

const onPageChanged = (page: number) => {
  fetchData({ page })
}

const onClickSearch = (search: string) => {
  searchValue.value = search
  fetchData()
}

onBeforeMount(async () => {
  await fetchData()
})
</script>

<template>
  <div class="body">
    <List
      title="Atleta"
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

<style scoped>
.body {
  margin-top: 10rem;
  margin-left: 1%;
  width: 98%;
}
</style>
