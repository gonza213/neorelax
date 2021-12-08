<template>
  <div
    class="col-md-10 p-3 animate__animated animate__fadeIn animate__delay-2s"
  >
    <div class="col-md-12" id="colchones">
      <div class="row">
        <div class="col-md-12 p-3 fondo-negro">
          <h3 class="text-left text-uppercase text-white"><b>Colchones</b></h3>
        </div>
        <div
          class="col-md-4 p-2"
          v-for="producto in colchones"
          :key="producto.id"
        >
          <div
            class="card efecto h-100 borde"
            style="width: 100%; "
          >
            <a style="cursor:pointer;" @click="verProducto(producto.id)">
              <img
                :src="producto.imagen"
                class="card-img-top"
                alt=""
                style="height: 250px"
              />
              <div class="card-body">
                <h5 class="card-title p-2">
                  <b>{{ producto.titulo }}</b>
                </h5>
                <p class="card-text" v-html="producto.intro"></p>
                <h5 class="fondo-verde p-2 text-center text-white">
                  $<b>{{ producto.precio }}</b>
                </h5>
                <p class="text-center"><b>Envio a todo el país</b></p>
                <hr class="border-info" />
                <div class="row">
                  <div class="col-md-6 mx-auto">
                    <button
                      @click="verProducto(producto.id)"
                      class="btn btn-outline-secondary btn-block"
                    >
                      <b><i class="fas fa-eye"></i> Ver más</b>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { ref, onMounted } from "vue";
import { getColchones } from "../../api/productos";
export default {
  //  data(){
  //         return{
  //             listaProductosColchones: [],
  //         }
  //     },
  methods: {
    verProducto(id) {
      this.$router.push("/item/" + id);
    },
  },
  //   mounted:function(){

  //     let url = 'https://neorelax.com.ar/api/public/api/productos/colchones';

  //     axios.get(url)
  //     .then(response =>{
  //         this.listaProductosColchones = response.data;
  //     });
  // },
  setup() {
    let colchones = ref(null);

    onMounted(async () => {
      const response = await getColchones();
      colchones.value = response;
    });

    return {
      colchones,
    };
  },
};
</script>

<style scoped>
.borde {
  border-top: 3px solid #000;
}
.borde2 {
  border: 2px solid #00c5b6 !important;
}

.fondo-negro{
    background: #000 !important;
}
</style>
