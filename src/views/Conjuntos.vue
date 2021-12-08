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
import Items from '../components/Sommiers/Items';
export default {
 name: 'Colchones',
    components:{
        BasicLayout,
        Items,
        Menu
    },
}
</script>

<style>

</style>