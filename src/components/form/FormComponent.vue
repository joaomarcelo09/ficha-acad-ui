<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}

const emit = defineEmits<{
  (e: 'saveForm', data: any): void
}>()

defineProps<{
  title?: string
}>()

function btnSave() {
  const formData = {}
  emit('saveForm', formData)
}
</script>

<template>
  <div class="body d-flex flex-column align-items-center">
    <div class="container-fluid page-title text-center">{{ title }}</div>
    <div class="card shadow">
      <div class="card-body">
        <div class="d-flex flex-wrap">
          <slot name="fields"></slot>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <button type="button" class="btn btn-secondary">Voltar</button>
          <button type="submit" @click="btnSave()" class="btn btn-success">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 0.9rem;
}
</style>
