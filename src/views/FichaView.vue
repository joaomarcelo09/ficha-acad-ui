<script setup lang="ts">
import ListComponent from '@/components/ListComponent.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
// const route = useRoute()


const items = ref([{nome: 'Joao Marcelo', data: '16/01/2024', status: 'Malhando' }, 'item 2'])
const columns = ref(['Nome', 'Data', 'Status'])
const pages = ref([1,2,3])
const title = ref('Ficha')

const openCreate = () => {
    router.push('form')
}



</script>

<template>
    <div class="body">
        <ListComponent @open-create="openCreate" :title="title" :items="items" :columns="columns" :pagination="pages"/>
    </div>
</template>

<style scoped>
.body {

    margin-top: 10rem;
    margin-left: 1%;
    width: 98%;
}
</style>