<template>
  <div class="row">
    <div class="col-md-6 p-3">
      <div class="card borde h-100">
        <div class="card-body row">
          <div class="col-md-12">
            <h3 class="color-verde">Selecciona un envio:</h3>
          </div>
          <div class="form-group col-md-6">
            <label for="">Medio de transporte:</label>
            <select class="form-control form" v-model="formEnvio.transporte">
              <option value="Andreani">Andreani</option>
              <option value="Cruz del Sur">Cruz del Sur</option>
              <option value="Vendedor">Acordar con el vendedor</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="">Tipo de entrega:</label>
            <select class="form-control form" v-model="formEnvio.entrega">
              <option value="domicilio">Domicilio</option>
              <option value="sucursal">Sucursal</option>
            </select>
          </div>
          <div class="form-group col-md-12">
            <p
              class="text-center text-info"
              v-if="formEnvio.entrega === 'domicilio'"
            >
              El envío se entregará al domicilio completado en el anterior
              formulario.
            </p>
            <p
              class="text-center text-info"
              v-if="formEnvio.entrega === 'sucursal'"
            >
              El envío se entregará a la surcusal más cercana a su domicilio.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-3">
      <div class="card borde">
        <div class="card-body row">
          <div class="col">
            <h3 class="color-verde ml-2">Mi Pedido</h3>
          </div>
          <div class="col-md-12">
            <ul>
              <li class="lista">
                <p v-for="item in productos()" :key="item">
                  <span
                    ><i class="fas fa-check color-verde mr-2"></i>
                    {{ item.titulo }}</span
                  >
                  <span class="float-right"
                    >{{ item.cantidad }} <span class="color-verde">x</span> ${{
                      Intl.NumberFormat("de-DE").format(item.precio)
                    }}</span
                  >
                </p>
              </li>
              <li class="lista border-top border-bottom">
                <h4 class="p-2">
                  Subtotal
                  <span class="float-right"
                    >$ {{ Intl.NumberFormat("de-DE").format(subTotal()) }}</span
                  >
                </h4>
              </li>
              <li class="lista">
                <p class="p-2">
                  <i class="fas fa-truck"></i> Envío
                  <span class="float-right">${{ costoEnvio() }} </span>
                </p>
              </li>
              <li class="lista">
                <p class="p-2">
                  <i class="fas fa-percent"></i> Descuento
                  <span class="float-right">$0</span>
                </p>
              </li>
              <li class="lista border-top border-bottom">
                <h3 class="p-2 color-verde">
                  Total
                  <span class="float-right"
                    >$ {{ Intl.NumberFormat("de-DE").format(total()) }}</span
                  >
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watchEffect, onMounted, ref } from "vue";
import useEnvio from '../../composables/useEnvio'

export default {
  name: "Envio-pago",
  setup() {
    const formEnvio = ref({});

    //OBTENER PRODUCTOS
    const productos = () => {
      const items = JSON.parse(localStorage.getItem("Items"));

      return items;
    };

    //OBTENER SUBTOTAL
    const subTotal = () => {
      var total = localStorage.getItem("Total");

      return total;
    };


    const {costoEnvioDomicilio, costoEnvioSucursal} = useEnvio()



    //Ver COSTO DE ENVIO
    const costoEnvio = () => {
      if (formEnvio.value.transporte === "Andreani") {
        if (formEnvio.value.entrega === "domicilio") {
          var costo = 300;
        } else {
          var costo = 100;
        }
      } else if (formEnvio.value.transporte === "Cruz del Sur") {
        if (formEnvio.value.entrega === "domicilio") {
          var costo = parseInt(costoEnvioDomicilio.value) + 1;
        } else {
          var costo = parseInt(costoEnvioSucursal.value) + 1;
        }
      } else {
        var costo = 0;
      }

      return costo;
    };

    //OBTENER TOTAL
    const total = () => {
      var total = localStorage.getItem("Total");
      var costo = costoEnvio();

      var precio = Number(total) + Number(costo);

      return precio;
    };

    return {
      productos,
      subTotal,
      costoEnvio,
      formEnvio,
      total,
      // obtenerCosto,
    };
  },
};
</script>

<style scoped>
.form {
  border: 2px solid #aaa;
}

.form:focus {
  border: 2px solid #888;
}

.lista {
  /* border: 2px solid #aaa !important; */
  list-style: none;
}

.input-group-text {
  background: none !important;
  border: none !important;
}

input.error {
  border: 2px solid #faa !important;
  background-color: #ffeded !important;
}

select.error {
  border: 2px solid #faa !important;
  background-color: #ffeded !important;
}

.borde {
  border-top: 3px solid #000;
}
</style>
