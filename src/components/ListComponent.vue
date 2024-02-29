<script setup lang="ts">
defineProps<{
  items?: any
  pagination?: any
  search?: string
}>()
</script>

<template>
  <div class="card shadow">
    <div class="container row mt-4 mx-2">
      <input class="col-6" type="text" />
      <div class="col-6 row justify-content-end mx-0">
        <button class="col-2 bg-success mx-3 text-bg-primary">Criar</button>
      </div>
    </div>
    <div class="body col-sm-6 col-md-6">
      <div class="card mb-4">
        <div class="container text-start">
          <div class="row mt-2 mb-2 mx-0">
            <div class="col-3">Nome</div>
            <div class="col-3">Data</div>
            <div class="col-3">Status</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="border p-3 d-flex" v-for="(item, key) in items" :key="key">
              <div class="col-3 text-start mx-1">{{ item.nome ? item.nome : 'Não há dados' }}</div>
              <div class="col-3 text-start">{{ item.Data ? item.Data : 'Não há dados' }}</div>
              <div class="col-3 text-start">{{ item.Status ? item.Status : 'Não há dados' }}</div>

              <div class="container button row justify-content-end">
                <button class="col-4 bg-info mx-3 text-bg-primary">Editar</button>
                <button class="col-4 bg-danger text-bg-primary">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-2">
        <nav aria-label="...">
  <ul  class="pagination pagination-sm">
    <li v-for="pages in pagination" :key="pages" class="page-item"><a class="page-link" href="#"> {{ pages }}</a></li>
  </ul>
</nav>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin-top: 2rem;
  width: 100%;
}

.button {
  width: 100%;
  color: #ffffff;
}
</style>
