<template>
<div class="col-md-12">
    <div class="row">
    <div class="col-md-12">
        <ul class="list-group mt-3" v-if="products">
            <li class="list-group-item p-0" v-for="product in products" :key="product.id">
                <div class="card" v-if="product[0].precio != '0'">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2 col-sm-4">
                                 <img :src="'/'+product[0].imagen" class="float-right imagenCarrito" style="width: 80px">
                            </div>
                            <div class="col-md-10 col-sm-8">
                                <div class="row">
                                    <div class="col-md-3">
                                         <span class="float-left mt-2 precioItem">{{product[0].titulo}}</span>
                                    </div>
                                    <div class="col-md-3 offset-3">
                                           <button class="btn btn-primary btn-sm mt-2 float-right" @click="incrementar(product[0].id)"><i class="fas fa-plus"></i></button>
                                           <span class="quantity ml-3 mr-3 mt-3 float-right">{{product.quantity}}</span>
                                         <button class="btn btn-danger mt-2 btn-sm float-right" @click="desincrementar(product[0].id)"><i class="fas fa-minus"></i></button>
                                    </div>
                                    <div class="col-md-2">

                                         <h5 class="ml-3 mt-3  precioItem"><span class="float-left">x</span><span class="float-right">${{product[0].precio}}</span></h5>
                                    </div>
                                    <div class="col-md-1">
                                          <span class="ml-5 mt-2 float-right"><button class="btn badge badge-secondary btn-lg p-2" @click="eliminar(product[0].id)"><i class="fas fa-times-circle"></i></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <h2 class="text-center p-3" v-if="getSuma() == 0">No hay productos</h2>
    
    </div>
    <div class="col-md-12 mt-3 mb-3">    
        <div class="col-md-6 p-3 float-left">
            <h3 class="color-verde text-left mb-3"><b>Subtotal</b></h3>
            <p class="text-left"><b>Los costos del envio se calculan al finalizar la compra.</b></p>
        </div>
        <div class="col-md-6 p-3 float-right">
        <h3 class="color-verde text-right"><b>${{getSuma()}}</b></h3>
        </div>
    </div>
    <div class="col-md-12 mt-2" v-if="getSuma() > 0">
        <router-link to="/formulario-datos-personales" class="form-control btn btn-success btn-lg"><i class="fas fa-shopping-cart"></i> Realizar pedido</router-link>   
        <!-- <button type="button" @click="noPedido" class="form-control btn btn-success btn-lg">Realizar el pedido</button> -->
    </div>
      <div class="col-md-12  mt-2">
            <router-link to="/productos" class="continuar btn btn-block text-center"><i class="fa fa-arrow-right"></i> Continuar comprando</router-link>
    </div>
 </div>
</div>
</template>


<script>
import {ref, watchEffect} from 'vue';
import {addProductCartApi, deleteProductCartApi, deleteAllProductCartApi} from '../../api/cart';
import {useToast} from 'vue-toastification';

export default {
  props:{
      products: Array,
      reloadCartFn: Function,
  },
  methods:{
    //   noPedido(){
    //         this.$toast.error(`¡No se puede realizar pedidos por el momento! Sitio en mantenimiento...`);
    //   }
  },
  setup(props){
      let reloadCart = ref(false);
      const toast = useToast();

      const incrementar = (id) => {
          addProductCartApi(id);
          props.reloadCartFn();
      }

      const desincrementar = (id) => {
          deleteProductCartApi(id);
          props.reloadCartFn();
      }

      const noPedido = () => {
           toast.error("¡No se puede realizar el pedido por el momento!. Sitio en mantenimiento", {
                timeout: 3000,
                position: 'top-center'
            });
      }

      watchEffect(() => {
          reloadCart.value;
      })

      const getSuma = () => {
         let precios =  props.products;

          let totalTemp = 0;

          if(precios === null){
              console.log('No hay productos')
          }else{

            precios.forEach((product) => {

                console.log(product[0].precio);
            let precio = product[0].precio.replace(/[$.]/g, ''); 
            totalTemp += parseInt(precio) * product.quantity;
            });
            return new Intl.NumberFormat("de-DE").format(totalTemp);

          }   

      }
 

      const eliminar = (idProduct) => {
          deleteAllProductCartApi(idProduct);
          location.reload();
      }
      

      return {
          incrementar,
          desincrementar,
          getSuma,
          eliminar,
          toast,
          noPedido
      }
  }
}
</script>

  

<style scoped>
.opciones{
    width: 150px;
    font-weight: bold;
    text-align: center;
}
.precioItem{
    font-weight: bold;
    font-size: 20px;
}

.continuar{
    font-weight: bold;
    color: #888;
}

.selectCarrito{
    width: 120px;
    float: right;
}


</style>