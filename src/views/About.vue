<template>
  <BasicLayout>
      <Banner />
      <Quienes />
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Banner from '../components/About/Banner';
import Quienes from '../components/About/Quienes-somos';
export default {
   name: 'About',
   components:{
       BasicLayout,
       Banner,
       Quienes
   }
}
</script>

<style>

</style>