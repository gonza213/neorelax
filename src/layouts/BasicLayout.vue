<template>
    <div class="basic-layout">
        <Cabecera />
        <Menu />
        <slot />       
       <Footer />
    </div>
</template>

<script>
import Menu from '../components/Menu';
import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';

export default{
    name: 'BasicLayout',
    components:{
        Menu,
        Cabecera,
        Footer
    }
}
</script>

<style scoped>


</style>


