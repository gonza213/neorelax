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
import Menu from '../components/Productos/Menu';
import Items from '../components/Almohadas/Items';
export default {
    name: 'Almohadas',
    components:{
        BasicLayout,
        Menu,
        Items
    }
}
</script>

<style>

</style>