<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  rows: (string | number)[][]
  columns: string[]
  pagination: {
    currentPage: number
    totalPages: number
  }
  search?: string
  title: string
  inputPlaceholder?: string
}>()

const localSearch = ref('')
const emit = defineEmits(['open-create', 'open-edit', 'open-delete', 'page-changed', 'search'])

const create = (): void => {
  emit('open-create')
}

const edit = (data: string | number): void => {
  emit('open-edit', data)
}

const deleteItem = (id: string | number): void => {
  emit('open-delete', id)
}

const searchItem = () => {
  emit('search', localSearch.value)
}

const goToFirstPage = () => {
  emit('page-changed', 1)
}

const goToLastPage = () => {
  emit('page-changed', props.pagination.totalPages)
}

const next = () => {
  if (props.pagination.currentPage < props.pagination.totalPages) {
    emit('page-changed', props.pagination.currentPage + 1)
  }
}

const previous = () => {
  if (props.pagination.currentPage > 1) {
    emit('page-changed', props.pagination.currentPage - 1)
  }
}
</script>

<template>
  <div class="list px-4">
    <div class="card shadow p-2 overflow-x">
      <div class="d-flex align-items-center px-2">
        <h5 class="title">{{ title }}</h5>
        <div class="input-group mb-3">
          <button class="btn btn-success" @click="create" type="button">Criar</button>
          <input
            v-model="localSearch"
            type="text"
            class="form-control search-input"
            placeholder="Pesquise..."
            aria-label="Pesquise"
          />
          <button class="btn btn-outline-secondary text-black" @click="searchItem" type="button">
            Buscar
          </button>
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
            <div class="group-btn">
              <button class="btn btn-warning" @click="edit(row[0])" type="button">
                <font-awesome-icon icon="pencil" />
              </button>
              <button class="btn btn-danger" @click="deleteItem(row[0])" type="button">
                <font-awesome-icon icon="trash" />
              </button>
            </div>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end px-4 pt-2">
        <nav aria-label="Navegação de página exemplo">
          <ul class="pagination">
            <li class="page-item" @click="goToFirstPage">
              <a class="page-link text-black" href="#"
                ><font-awesome-icon icon="fa-angle-double-left"
              /></a>
            </li>
            <li class="page-item" @click="previous">
              <a class="page-link text-black" href="#"><font-awesome-icon icon="arrow-left" /></a>
            </li>
            <li class="page-item disabled">
              <a class="page-link text-black" href="#">
                Página {{ pagination.currentPage }} de {{ pagination.totalPages }}
              </a>
            </li>
            <li class="page-item" @click="next">
              <a class="page-link text-black" href="#"><font-awesome-icon icon="arrow-right" /></a>
            </li>
            <li class="page-item" @click="goToLastPage">
              <a class="page-link text-black" href="#"
                ><font-awesome-icon icon="fa-angle-double-right"
              /></a>
            </li>
          </ul>
        </nav>
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

.group-btn {
  display: flex;
}

.search-input {
  border-radius: 10px;
  border: 1px solid rgb(202, 202, 202);
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.search-input::placeholder {
  color: black;
}

.input-group {
  width: 30%;
  margin-left: auto;
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
