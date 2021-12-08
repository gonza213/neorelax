<template>
  <BasicLayout>
      <Banner />
      <Porq />
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Banner from '../components/Porque/Banner';
import Porq from '../components/Porque/Porque-elegirnos';

export default {
    name: 'Porque',
    components:{
        BasicLayout,
        Banner,
        Porq
    }
}
</script>

<style>

</style>