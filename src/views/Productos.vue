<template>
  <BasicLayout>
      <div class="col-md-12 p-3">
          <div class="row">
              <Menu />
              <Items />
          </div>
      </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Menu from '../components/Productos/Menu'
import Items from '../components/Productos/Items';

export default {
    name: 'Productos',
    components:{
        BasicLayout,
        Items,
        Menu
    },
     props:{
    // desaparecerCo: Boolean,
    // desaparecerAl: Boolean,
    // desaparecerCu: Boolean,
    // desaparecerSo: Boolean,
  },
  data(){
    return{
    //   ocultar: false,
    //   ver1: true,
    //   ver2: true,
    //   ver3: true
    }
  }
}
</script>

<style>

</style>