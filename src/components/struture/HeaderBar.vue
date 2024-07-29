<template>
  <header class="header">
    <h1>Projeto Academia</h1>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  color: var(--white);
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: var(--arial);
  position: relative;
}

.header h1 {
  font-size: 1.5rem;
  margin: 0;
}

@media (min-width: 1024px) {
  .header {
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
