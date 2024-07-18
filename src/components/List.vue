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
    <div class="container-fluid page-title">{{ title }}</div>
    <div class="card shadow p-2 overflow-x">
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
      <div>
        <nav>
          <ul class="pagination pagination-sm">
            <li v-for="pages in pagination" :key="pages" class="page-item">
              <a class="page-link" href="#"> {{ pages }}</a>
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

.input-search {
  padding: 10px;
  font-size: 16px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    border-color: red;
    box-shadow: 0 0 5px rgba(255, 99, 71, 0.5);
    outline: none;
  }
}
</style>
