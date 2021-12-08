<template>
  <BasicLayout>
     <Banner />
     <Franja />
     <Video />
     <Categorias />
     <Frase />
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Banner from '../components/Home/Banner';
import Franja from '../components/Home/Franja';
import Video from '../components/Home/Video';
import Categorias from '../components/Home/Categorias';
import Frase from '../components/Home/Frase';

export default{
  name: 'Home',
  components:{
    BasicLayout,
    Banner,
    Franja,
    Video,
    Categorias,
    Frase
  }
}
</script>
