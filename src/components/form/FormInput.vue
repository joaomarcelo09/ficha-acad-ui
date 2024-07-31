<script setup lang="ts">
import { ref } from 'vue'
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

const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function isChecked(value: string): boolean {
  return (props.modelValue as string[]).includes(value)
}

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

function updateValueCheckbox(value: string, event: Event) {
  const checkbox = event.target as HTMLInputElement
  const selectedValues = [...(props.modelValue as string[])]

  if (checkbox.checked) {
    if (!selectedValues.includes(value)) {
      selectedValues.push(value)
    }
  } else {
    const index = selectedValues.indexOf(value)
    if (index > -1) {
      selectedValues.splice(index, 1)
    }
  }

  emit('update:modelValue', selectedValues)
}
</script>

<template>
  <div class="mx-3 mt-2 mb-3">
    <div v-if="props.type === 'input'">
      <label :for="props.label" class="mb-1">{{ props.label }}</label>
      <input
        :id="props.label"
        :value="props.modelValue"
        @input="updateValue"
        class="form-control"
        :placeholder="props.placeholder"
      />
    </div>
    <div v-if="props.type === 'select'">
      <label :for="props.label" class="mb-1">{{ props.label }}</label>
      <div v-if="props.multiSelect" class="dropdown">
        <button @click="toggleDropdown" class="btn dropdown-toggle" type="button">Selecione</button>
        <div v-show="isDropdownOpen" class="multi-select-container">
          <div v-for="option in props.optionsSelect" :key="option.value" class="dropdown-item">
            <input
              type="checkbox"
              :id="'checkbox-' + option.value"
              :value="option.value"
              :checked="isChecked(option.value)"
              @change="updateValueCheckbox(option.value, $event)"
              class="form-check-input"
            />
            <label :for="'checkbox-' + option.value" class="form-check-label">
              {{ option.label }}
            </label>
          </div>
        </div>
      </div>
      <div v-else>
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
    </div>
  </div>
</template>

<style scoped>
.form-control,
.form-select {
  width: 10rem;
}

.btn {
  border: solid 1px lightgray;
  width: 10rem;
}

.multi-select-container {
  display: flex;
  flex-direction: column;
  max-height: 100px;
  overflow-y: auto;
  scrollbar-color: var(--green) transparent;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: #f5f5f5;
  width: 15rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
}

.form-check-input {
  margin-right: 0.5rem;
  flex-wrap: wrap;
}

.form-check-input:checked {
  background-color: var(--green);
  border-color: var(--green);
}
</style>
