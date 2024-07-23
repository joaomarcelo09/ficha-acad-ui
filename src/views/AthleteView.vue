<script setup lang="ts">
import ListComponent from '@/components/ListComponent.vue'
import { ref } from 'vue'

const items = ref([{ nome: 'Joao Marcelo', data: '16/01/2024', status: 'Malhando' }, 'item 2'])
const columns = ref(['Nome', 'Data', 'Status'])
const pages = ref([1, 2, 3])
const title = ref('Atleta')
</script>

<template>
  <div class="body">
    <ListComponent :title="title" :items="items" :columns="columns" :pagination="pages" />
  </div>
</template>

<style scoped></style>
