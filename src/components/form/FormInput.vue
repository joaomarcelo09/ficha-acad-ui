<script setup lang="ts">

const props = defineProps<{
  label?: string
  placeholder?: string
  smalltext?: string
}>()

</script>

<template>

<div class="form-group col-3 mx-3 mt-2">
    <label class="mb-2">{{ props.label }}</label>
    <input type="text" class="form-control" :placeholder="props.placeholder">
    <small class="form-text text-muted mt-2">{{ props.smalltext }}</small>
  </div>

</template>