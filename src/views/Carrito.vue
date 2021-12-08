<template>
    <BasicLayout>
      <div class="carrito p-5">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-left text-uppercase"><b>Mi carrito:</b></h3>
      </div>
       <SumaProductos :products="products"  :reloadCartFn="reloadCartFn"/>
    </div>
  </div>
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import SumaProductos from '../components/Carrito/Suma_Carrito';
import {ref, watchEffect} from 'vue';
import {getProductCartApi} from '../api/cart';


export default {
    name: 'Carrito',
    components:{
        BasicLayout,
        SumaProductos
    },
      setup() {
        let products = ref(null);
        let reloadCart = ref(false);


        const getProductsCart = async () => {
          const response =  await getProductCartApi();
          products.value = response;
        }

        watchEffect(() => {
            reloadCart.value;
            getProductsCart();
        });

        const reloadCartFn = () => {
          reloadCart.value = !reloadCart.value;
        }

        return{
            products,
            reloadCartFn
        }
    },
}
</script>

<style>

</style>