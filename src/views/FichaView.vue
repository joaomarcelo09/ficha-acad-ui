<script setup lang="ts">
import ListComponent from '@/components/ListComponent.vue';
import { ref } from 'vue';

const items = ref([{nome: 'Joao Marcelo', Data: '16/01/2024', Status: 'Malhando' }, 'item 2'])
const columns = ref(['Nome', 'Data', 'Status'])
const pages = ref([1,2,3])



</script>

<template>
    <div class="body">
        <ListComponent :items="items" :columns="columns" :pagination="pages"/>
    </div>
</template>

<style scoped>
.body {

    margin-top: 10rem;
    margin-left: 1%;
    width: 98%;
}
</style>