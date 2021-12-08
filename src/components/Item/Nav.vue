<template>
    <nav class="nav nav-producto mt-2 ml-3">
        <router-link to="/" class="nav-link active p-0" >Home <i class="color-gris fas fa-angle-right"></i></router-link> 
        <router-link to="/productos" class="nav-link p-0">Productos  <i class="color-gris fas fa-angle-right"></i></router-link> 
        <a class="nav-link disabled p-0"  tabindex="-1" aria-disabled="true">{{item}}</a>
   </nav>
</template>

<script>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {getItem} from '../../api/productos'
// import axios from 'axios';
export default {
//    data(){
//        return{
//            id: null,
//            producto: {
//                "titulo": ""
//            }
//        }
//    },
//    mounted:function(){
//        this.id = this.$route.params.id;
//        axios.get('https://neorelax.com.ar/api/public/api/producto/'+this.id)
//        .then(response => {
//            this.producto.titulo = response.data[0].titulo;
//        })
//    },
setup(){
    let item = ref(null);
    const route = useRoute();

    onMounted(async() => {
        const id = route.params.id;
        const response = await getItem(id);
        item.value = response[0].titulo;
    })

    return {
        item,
    }
}
}
</script>

<style>

</style>