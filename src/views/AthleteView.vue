<script setup lang="ts">
import List from '@/components/List.vue'
import { ref, computed } from 'vue'
import { getRowsByJson, getColumnsByJson } from '@/utils/List'

const gettedByStore = ref([{ nome: 'Joao Marcelo', data: '16/01/2024', status: 'Malhando' }])

const pages = ref([1, 2, 3])

const columns = computed(() => getColumnsByJson(gettedByStore.value))
const rows = computed(() => getRowsByJson(gettedByStore.value))
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
