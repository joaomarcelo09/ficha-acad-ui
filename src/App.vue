<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/struture/SideBar.vue'
import Header from './components/struture/HeaderBar.vue'
</script>

<template>
  <div class="main-container">
    <Sidebar />
    <div class="content">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  position: fixed;
  background-color: var(--light-gray);
  width: 100%;
  height: 100%;
}
div.content {
  width: 100%;
  height: 100%;
}

@media (min-width: 1024px) {
  nav {
    text-align: center;
    font-size: 1rem;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 5rem;
  }
}
</style>
