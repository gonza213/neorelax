<template>
    <div class="col-md-6 p-4">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" v-if="principal.imagen">
                    <img :src="'/'+principal.imagen" class="img-fluid" style="width: 100% !important; height:400px !important;">
                    </div>
                    <div class="carousel-item" v-for="item in listaImagenes" :key="item.id_img">
                    <img :src="'/'+item.img" class="img-fluid"  style="width: 100% !important; height:400px !important;">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
     data(){
       return{
           id: null,
           listaImagenes: [],
           principal:{
               "imagen": ""
           }
       }
   },
   mounted:function(){
       this.id = this.$route.params.id;
       axios.get('https://neorelax.com.ar/api/public/api/imagenes/'+this.id)
       .then(response => {
         
               this.listaImagenes = response.data;
               this.principal.imagen = response.data[0].imagen;
           
       })
   }
}
</script>

<style>

</style>