<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/struture/SideBar.vue'
</script>

<template>
  <Sidebar />

  <div class="content">
    <header>Projeto Academia</header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: lightgray;
  height: 4rem;
}

div.content {
  margin-left: 12rem;
  height: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    text-align: center;
    justify-content: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: center;
    font-size: 1rem;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 5rem;
  }
}
</style>
