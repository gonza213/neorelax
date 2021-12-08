<template>
     <div class="col-md-10 p-3 animate__animated animate__fadeIn animate__delay-2s">
          
            <div class="col-md-12" id="cuello-musical" >
                <div class="row">
                    <div class="col-md-12 p-3">
                        <h3 class="text-left text-uppercase"><b>Cuello Musical</b></h3>
                    </div>
                    <div class="col-md-4 p-2"  v-for="producto in cuellos" :key="producto.id">

                          <div class="card efecto"  style="width: 100%; box-shadow: 3px 0px 4px 3px #888888">
                           <a style="cursor:pointer;" @click="verProducto(producto.id)" >
                            <img :src="producto.imagen" class="card-img-top" alt="" style="height: 250px">
                            <div class="card-body">
                                <h5 class="card-title p-2"><b>{{producto.titulo}}</b></h5>
                                                <p class="card-text" v-html="producto.intro"></p>
                                <h5 class="fondo-verde p-2 text-center text-white">$<b>{{producto.precio}}</b></h5>
                                <p class="text-center"><b>Envio por todo el país</b></p>
                                <hr class="border-info">
                                <div class="row justify-content-sm-center justify-content-md-center">
                                    <button @click="verProducto(producto.id)"  class="btn btn-outline-secondary"><b><i class="fas fa-eye"></i> Ver más</b></button>
                                 </div>
                            </div>
                          </a>
                        </div>
                    </div>
                </div>
            </div>  
     </div>
</template>

<script>
// import axios from 'axios';
import {ref, onMounted} from 'vue';
import {getCuellos} from '../../api/productos';
export default {
//  data(){
//         return{
//             listaProductosCuellos: [],
//         }
//     },
    methods:{
        verProducto(id){
           this.$router.push('/item/'+ id);
        }
    },
    //   mounted:function(){

    //     let url = 'https://neorelax.com.ar/api/public/api/productos/cuellos';
      
    //     axios.get(url)
    //     .then(response =>{
    //         this.listaProductosCuellos = response.data;
    //     });
    // },
    setup(){
        let cuellos = ref(null);

        onMounted( async () => {
            const response = await getCuellos();
            cuellos.value = response;
        });

        return{
            cuellos,
        }
    }
}
</script>

<style>

</style>