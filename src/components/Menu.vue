<template>

    <nav class="navbar sticky-top  navbar-expand-lg fondo-verde p-1 text-uppercase">
        <router-link class="navbar-brand ml-3" to="/"><img src="/img/logo_neorelax_entretitulo_blanco.png" alt="neorelax" style="width: 160px" class="img-responsive"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-bars text-white"></i></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
            <ul class="navbar-nav mx-auto mt-2 mr-5 mt-lg-0 ml-0">
            <span class="form-inline my-2 p-2 ml-1 aparecer ocultarWeb">
               Carrito: <router-link to="/carrito" class="carritoIcon" style="text-decoration: none; color: #fff;"><i class="fas fa-shopping-cart"></i></router-link>
            </span>
            <li class="nav-item active">
                <router-link class="nav-link efec mr-4" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link efec mr-4" to="/quienes-somos">Quiénes Somos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link efec mr-4" to="/porque-elegirnos">Porque elegirnos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link efec mr-4" to="/productos">Productos</router-link>
            </li>
              <li class="nav-item">
                <router-link class="nav-link efec mr-5" to="/contacto">Contacto</router-link>
            </li>
            </ul>
            <span class="form-inline my-2 my-lg-0 ocultar mr-5">
                <router-link class="nav-link carritoIcon mr-3" to="/carrito"><i class="fas fa-shopping-cart"></i></router-link>
            </span>
              <!-- <span class="form-inline my-2 p-2 ml-1 aparecer ocultarWeb">
                <router-link to="/login" style="text-decoration: none; color: #fff;" class="btn btn-secondary btn-sm btn-block">Iniciar sesión</router-link>
            </span> -->
        </div>
   </nav>

</template>

<script>

export default{
    name: 'Menu',
}
</script>


<style scoped>
.carritoIcon{
    color: #fff !important;
    font-size: 30px;
}

 .carritoIcon:hover{
     color: #000 !important;
 }
</style>