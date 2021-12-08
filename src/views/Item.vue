<template>
  <BasicLayout>
      <Nav />
      <div class="col-md-12 p-3">
          <div class="row">
              <Carousel />
              <Carrito />
              <Info />
          </div>
      </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Nav from '../components/Item/Nav';
import Carousel from '../components/Item/Carousel';
import Carrito from '../components/Item/Carrito';
import Info from '../components/Item/Info';

export default {
    name: 'Item',
    components:{
        BasicLayout,
        Nav,
        Carousel,
        Carrito,
        Info
    }
}
</script>

<style>

</style>