<script setup lang="ts">
import List from '@/components/List.vue'
import { ref, computed } from 'vue'
import { getRowsByJson, getColumnsByJson } from '@/utils/List'

const gettedByStore = ref([
  {
    id: 23,
    id_pessoa: 23,
    peso: 50,
    altura: 161,
    biotipo: 'mesomorfo',
    reevaluated: 0,
    status: true,
    created_at: '2024-03-21T02:36:27.000Z',
    reevaluated_at: null,
    updated_at: null,
    deleted_at: null
  }
])

const pages = ref([1, 2, 3])
const fieldsSelected = ['peso', 'altura', 'biotipo', 'status', 'created_at']

const columns = computed(() => getColumnsByJson(gettedByStore.value, fieldsSelected))
const rows = computed(() => getRowsByJson(gettedByStore.value, fieldsSelected))
</script>

<template>
  <div class="body">
    <List
      title="Atleta"
      :rows="rows ?? []"
      :columns="columns ?? []"
      :pagination="pages"
      input-placeholder="Buscar atleta..."
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
