<template>
   <BasicLayout>
    <div class="col-md-12">
        <Compr/>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';
import Compr from '../components/Carrito/Finalizar_Transferencia.vue';

export default {
name: 'Comprobante',
components:{
    BasicLayout,
    Compr
}
}
</script>

<style>

</style>