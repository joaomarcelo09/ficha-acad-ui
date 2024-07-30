<script setup lang="ts">
import { enumBiotipo } from '@/enum/biotipo'

const props = defineProps<{
  label?: string
  placeholder?: string
  smalltext?: string
  type?: string
  multiSelect?: boolean
  optionsSelect?: any
  modelValue?: string | number | enumBiotipo | Array<Object> | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

function updateValue(event: Event) {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value)
}

function updateValueSelect(event: Event) {
  const target = event.target as HTMLSelectElement
  if (props.multiSelect) {
    const selectedOptions = Array.from(target.selectedOptions, (option) => option.value)
    emit('update:modelValue', selectedOptions)
  } else {
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <div class="mx-3 mt-2 mb-3">
    <div v-if="props.type == 'input'">
      <label :for="props.label" class="mb-1">{{ props.label }} </label>
      <input
        :id="props.label"
        :value="props.modelValue"
        @input="updateValue"
        class="form-control"
        :placeholder="props.placeholder"
      />
    </div>
    <div v-if="props.type === 'select' && !props.multiSelect">
      <label :for="props.label" class="mb-1">{{ props.label }}</label>
      <select
        :id="props.label"
        :value="props.modelValue"
        @change="updateValueSelect"
        class="form-select"
        :placeholder="props.placeholder"
      >
        <option v-for="option in props.optionsSelect" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div v-if="props.type === 'select' && props.multiSelect">
      <label :for="props.label" class="mb-1">{{ props.label }}</label>
      <select
        :multiple="true"
        :id="props.label"
        @change="updateValueSelect"
        class="form-select"
        :placeholder="props.placeholder"
      >
        <option v-for="option in props.optionsSelect" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style>
.form-control,
.form-select {
  width: 10rem;
}
</style>
