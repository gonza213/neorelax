<template>
  <section id="categorias">
    <div class="col-md-12 mt-5 mb-3">
        <div class="row">
            <div class="col-md-12 p-1 fondo-verde mb-5" >
                <h1 class="text-center text-white text-uppercase ">
                    <b>Nuestros productos</b>
                </h1>
            </div>
            <div class="col-md-4 p-2 mb-4">
            <router-link to="/colchones">
               <div class="card efecto" style="width:100%; box-shadow: 3px 0px 5px #888; margin-top: -65px;">
                <img src="img/foto2.jpg" class="card-img-top img-categoria" alt="Colchones">
                <div class="card-body">
                    <h4 class="card-title color-verde text-uppercase"> <b>Colchones</b> </h4>
                </div>
                </div>
            </router-link>
            </div>
             <div class="col-md-4 p-2 mb-4">
                <router-link to="/conjuntos">
                <div class="card efecto" style="width:100%; box-shadow: 3px 0px 5px #888; margin-top: -65px">
                    <img src="img/colchones/Colchon_200x200.jpg" class="card-img-top img-categoria" alt="Sommiers">
                    <div class="card-body">
                        <h4 class="card-title color-verde text-uppercase"> <b>Conjuntos</b> </h4>
                    </div>
                    </div>
              </router-link>
            </div>
            <div class="col-md-4 p-2 mb-4">
                 <router-link to="/almohadas">
                <div class="card efecto" style="width:100%; box-shadow: 3px 0px 5px #888; margin-top: -65px">
                    <img src="img/almohadas/70x40 cer vent.jpg" class="card-img-top img-categoria" alt="Almohadas">
                    <div class="card-body">
                        <h4 class="card-title color-verde text-uppercase"> <b>Almohadas Vicoelásticas</b> </h4>
                    </div>
                    </div>
                 </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

</style>