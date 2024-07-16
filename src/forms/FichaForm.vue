<script setup lang="ts">
import { ref } from 'vue'
import FormComponent from '@/components/form/FormComponent.vue'
import FormInput from '@/components/form/FormInput.vue'
</script>

<template>
  <div class="body">
    <FormComponent title="Criação de Ficha">
      <template #fields>
        <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small" />
        <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small" />
        <FormInput label="Teste label" placeholder="teste placeholder" smalltext="teste small" />
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
