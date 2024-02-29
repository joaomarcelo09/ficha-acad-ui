<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sidebar">
      <nav>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/ficha">Ficha</RouterLink>
        <RouterLink to="/atleta">Atleta</RouterLink>
      </nav>
  </div>
  <div class="content">
    <header>
      Projeto Academia
    </header>
  <RouterView />
</div>
</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 12rem;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

header {
  line-height: 1.5;
  background-color: lightgray;
  height: 4rem;
}

div.content {
  margin-left: 12rem;
  height: auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
 
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color:#d3d3d3;
}

nav a.router-link-exact-active:hover {
  background-color:#d3d3d3;
}

nav a {
  display: block;
  color: #000000;
  width: auto;
  padding: 10px;
  text-decoration: none;
}

nav a:hover {
  background-color: #f0f8ff;
}

nav a:first-of-type {
  border: 0;
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
