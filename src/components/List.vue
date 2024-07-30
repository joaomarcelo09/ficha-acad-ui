<script setup lang="ts">
const props = defineProps<{
  rows: (string | number)[][]
  columns: string[]
  pagination?: any
  search?: string
  title: string
  inputPlaceholder?: string
}>()

const emit = defineEmits(['open-create', 'open-edit'])

const create = (): void => {
  emit('open-create')
}
</script>

<template>
  <div class="list px-4">
    <div class="card shadow p-2 overflow-x">
      <div class="d-flex align-items-center px-2">
        <h5 class="title">{{ title }}</h5>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Pesquise..."
            aria-label="Pesquise"
          />
          <button class="btn btn-outline-secondary" type="button">Buscar</button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(title, index) in columns" :key="index">
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) of rows" :key="index">
            <td v-for="(data, dataIndex) of row" :key="dataIndex">{{ data }}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end px-4 pt-2">
        <nav>paginacao</nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  font-family: 'Open Sans', sans-serif;
}

.body {
  margin-top: 2rem;
  width: 100%;
}

.overflow-x {
  overflow-x: auto;
}

.search-input {
  border-radius: 10px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.search-input::placeholder {
  color: #888;
}

.input-group {
  width: 30%;
  margin-left: auto;
}

.input-group-text {
  border-radius: 8px 0 0 8px;
  background-color: #333;
  color: #fff;
  border: 2px solid #333;
  border-right: none;
}

.input-group .btn {
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.input-group .btn:hover {
  background-color: var(--green);
  color: black;
}

.search-input:focus {
  border-color: var(--green);
  outline: none;
}

.search-input:hover {
  border-color: var(--green);
}
</style>
