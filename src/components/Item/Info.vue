<template>
    <div class="col-md-12 p-3">
        <div class="card" style="box-shadow: 3px 0px 5px #888">
            <div class="card-body">
                 <div class="row">
                    <div class="col-md-12 p-3">
                        <h2 class="text-center text-uppercase color-verde">{{producto.titulo}}</h2>
                    </div>
                    <div class="col-md-5">
                        <img :src="'/'+producto.imagen" class="img-thumbnail" style="width: 100%; height: 350px" />
                    </div>
                    <div class="col-md-7 p-3">
                        <div class="card p-2">
                            <div class="card-body">
                                <p v-html="producto.descripcion"></p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios';

export default {

   data(){
       return{
           id: null,
           producto: {
               "titulo": "",
               "descripcion": "",
               "imagen": ""
           }
       }
   },
   mounted:function(){
       this.id = this.$route.params.id;
       axios.get('https://neorelax.com.ar/api/public/api/producto/'+this.id)
       .then(response => {
           this.producto.titulo = response.data[0].titulo;
           this.producto.descripcion = response.data[0].descripcion;
           this.producto.imagen = response.data[0].imagen;
       })
   }
}
</script>

<style>

</style>