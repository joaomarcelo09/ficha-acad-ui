<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/struture/SideBar.vue'
import Header from './components/struture/HeaderBar.vue'
</script>

<template>
  <div class="main-container">
    <notifications class="notify" width="300px" closeOnClick />
    <Sidebar />
    <div class="content d-flex flex-column align-items-center">
      <Header />
      <RouterView class="body" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: var(--light-gray);
  width: 100%;
  height: 100%;
}

.notify {
  margin: 5rem 2rem 5rem;
}

div.content {
  width: 100%;
  height: 100%;
  align-items: center;
}

.body {
  margin-top: 10rem;
  width: 95%;
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
