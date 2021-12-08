<template>
  <BasicLayout>
      <Banner />
      <Info />
     <div class="col-md-12 p-4">
         <div class="row">
             <Preguntas />
             <Formulario />
         </div>
     </div>
     <Punto />
     <Mapa />
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout';
import Banner from '../components/Contacto/Banner';
import Info from '../components/Contacto/Info';
import Preguntas from '../components/Contacto/Preguntas';
import Formulario from '../components/Contacto/Formulario';
import Punto from '../components/Contacto/Punto';
import Mapa from '../components/Contacto/Mapa';

export default {
    name: 'Contacto',
    components:{
        BasicLayout,
        Banner,
        Info,
        Preguntas,
        Formulario,
        Punto,
        Mapa
    }
}
</script>

<style>

</style>