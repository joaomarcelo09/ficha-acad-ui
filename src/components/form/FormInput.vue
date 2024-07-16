<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder?: string
  smalltext?: string
}>()
</script>

<template>
  <div class="mx-3 mt-2 mb-3">
    <label class="mb-1">{{ props.label }}</label>
    <input type="text" class="form-control" :placeholder="props.placeholder" />
  </div>
</template>
