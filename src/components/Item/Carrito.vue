<template>
  <div class="col-md-6 mt-4">
        <div class="card p-3" style="box-shadow: 3px 0px 5px #888">
            <div class="card-body">
                <h2 class="text-dark text-uppercase p-2"><b>{{itemTitulo}}</b></h2>
                <h3 class="color-gris text-uppercase p-2"><b>${{itemPrecio}}</b></h3>
                 <p class="text-dark p-1">12 cuotas sin interés de <b class="text-dark">${{cuotas}}</b></p>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-12" v-if="itemStock != '0'">
                            <button class="btn btn-secondary btn-sm btn-block" @click="addProductCart(itemId)"><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                        </div>
                         <div class="col-md-12" v-else>
                            <button class="btn btn-secondary btn-sm btn-block" disabled><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <p class="text-dark">Envíos a todo el país. CABA y GBA sin cargo.</p>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, onMounted, watchEffect} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getItem} from '../../api/productos'
import {addProductCartApi} from '../../api/cart';
import {useToast} from 'vue-toastification'

export default {
   setup(){
       let itemTitulo = ref(null);
       let itemPrecio = ref(null);
       let itemId = ref(null);
       let itemStock = ref(null);
       const route = useRoute();
       const router = useRouter();
       let cuotas = ref(0);
       const toast = useToast();
      

       onMounted(async () => {
           const id = route.params.id;
           const response = await getItem(id);
           itemTitulo.value = response[0].titulo;
           itemPrecio.value = response[0].precio;
           itemId.value = response[0].id;
           itemStock.value = response[0].stock;
       })

       const addProductCart = async (idProduct) =>{
           addProductCartApi(idProduct);
            router.push("/carrito");
            toast.success("¡Has añadido el producto al carrito!", {
                            timeout: 3000,
                            position: 'top-center'
                            });
       }

       
      watchEffect(async () => {
          const id = route.params.id;
          const response = await getItem(id);
          let precio = response[0].precio.replace(/[$.]/g, '');
          let totalTemp = (parseInt(precio) / 12).toFixed(2);
          cuotas.value = new Intl.NumberFormat("de-DE").format(totalTemp);

      })
       
       return{
           itemPrecio,
           itemTitulo,
           itemId,
           itemStock,
           addProductCart,
           cuotas,
           toast
       }
   }
}
</script>

<style>
select option{
    font-weight: bold;
}
</style>