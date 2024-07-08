<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="/public/academia.png" alt="Academia Icon" class="sidebar-icon" />
    </div>
    <nav>
      <RouterLink to="/" class="nav-link" active-class="active-link">Início</RouterLink>
      <RouterLink to="/ficha/list" class="nav-link" active-class="active-link">Ficha</RouterLink>
      <RouterLink to="/atleta" class="nav-link" active-class="active-link">Atleta</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 14rem;
  background-color: #282c34;
  position: fixed;
  height: 100%;
  overflow: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
}

.sidebar-icon {
  width: 80px;
  height: 80px;
}

nav {
  width: 100%;
  text-align: left;
  margin-top: 2rem;
}

.nav-link {
  display: block;
  color: #c0c0c0;
  width: 100%;
  padding: 1rem 1.5rem;
  text-decoration: none;
  font-size: 16px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.nav-link:hover {
  background-color: #3c4048;
  color: #ffffff;
}

.active-link {
  background-color: #4caf50;
  color: #ffffff;
}

nav a:first-of-type {
  border: 0;
}
</style>
