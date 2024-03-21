<script setup lang="ts">
import { ref } from 'vue';
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'



</script>

<template>
    <div class="body">
        <FormComponent>
            <template #fields>
                <div class="row justify-content-center">
                <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small"/>
                <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small"/>
                <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small"/>
                </div>
            </template>
        </FormComponent>
    </div>
</template>

<style scoped>
.body {

    margin-top: 10rem;
    margin-left: 1%;
    width: 98%;
}
</style>