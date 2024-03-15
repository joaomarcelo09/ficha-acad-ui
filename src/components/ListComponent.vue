<script setup lang="ts">
defineProps<{
  items?: any
  pagination?: any
  columns?: any
  search?: string
  title: string
}>()
</script>

<template>
  <div class="container-fluid page-title">{{ title }}</div>
  <div class="card shadow">
    <div class="container-fluid row w-100 mt-4 mx-2">
      <input class="input-search col-5" type="text"/>
      <div class="col-7 row justify-content-end mx-0">
        <button class="col-2 bg-success text-bg-primary">Criar</button>
      </div>
    </div>
    <div class="body col-sm-6 col-md-6">
        <div class="col-12">
          <div class="d-flex mt-2 mb-2">
            <div class="col-3 text-center" v-for="(column, key) in columns" :key="key">{{ column }}</div>
          </div>
        </div>         
      <div class="card mb-4">
        <div class="row">
          <div class="col-12">
            <div class="border pt-3 pb-3 d-flex" v-for="(item, key) in items" :key="key">
              <div class="col-3 text-center">{{ item.nome ? item.nome : 'Não há dados' }}</div>
              <div class="col-3 text-center">{{ item.data ? item.data : 'Não há dados' }}</div>
              <div class="col-3 text-center">{{ item.status ? item.status : 'Não há dados' }}</div>

              <div class="container button row justify-content-end">
                <button class="col-2 bg-warning text-bg-primary">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button class="col-2 bg-danger text-bg-primary">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
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

</style>
