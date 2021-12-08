<template>
  <div class="col-md-2 p-3 w-100 h-100" >
    <h4 class="color-verde p-1">Categorías:</h4>
    <ul class="nav flex-column h-100">
      <li class="nav-item">
        <router-link to="/colchones" class="nav-link sidebar"
          ><i class="fas fa-angle-right"></i> Colchones</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/conjuntos" class="nav-link sidebar"
          ><i class="fas fa-angle-right"></i> Conjuntos</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/almohadas" class="nav-link sidebar"
          ><i class="fas fa-angle-right"></i> Almohadas
          Viscoelásticas</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  color: #000;
  text-transform: uppercase;
}

.sidebar:hover {
  color: #00c5b6;
}
</style>
