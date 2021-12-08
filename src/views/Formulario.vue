<template>
  <BasicLayout>
    <div class="col-md-12">
        <Form :products="products"/>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Form from '../components/Carrito/Formulario_Datos.vue';
import {ref, watchEffect} from 'vue';
import {getProductCartApi} from '../api/cart';

export default {
 name: 'Formulario',
 components:{
     BasicLayout,
     Form,
 },
   setup() {
        let products = ref(null);


        const getProductsCart = async () => {
          const response =  await getProductCartApi();
          products.value = response;
        }

        watchEffect(() => {
            getProductsCart();
        })

        return{
            products
        }
    },
}
</script>

<style>

</style>