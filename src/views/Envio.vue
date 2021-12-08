<template>
   <BasicLayout>
    <div class="col-md-12">
        <Envio/>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';
import Envio from '../components/Carrito/Envio-Pago.vue';

export default {
name: 'Comprobante',
components:{
    BasicLayout,
    Envio
}
}
</script>

<style>

</style>