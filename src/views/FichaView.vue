<script setup lang="ts">
import List from '@/components/List.vue'
import { useFichaStore } from '@/stores/ficha'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const $fichaStore = useFichaStore()
// const route = useRoute()

const items = $fichaStore.fichas
const columns = ref(['Nome', 'Data', 'Status'])
const pages = ref([1, 2, 3])
const title = ref('Ficha')

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
      @open-create="openCreate"
      :title="title"
      :items="items"
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
