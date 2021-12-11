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
                  <span class="float-right">${{ Intl.NumberFormat("de-DE").format(costoEnvio()) }} </span>
                </p>
              </li>
              <li class="lista" v-if="metodo == 'transferencia'">
                <p class="p-2">
                  <i class="fas fa-percent"></i> Descuento
                  <span class="float-right">-${{ Intl.NumberFormat("de-DE").format(descuento()) }}</span>
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
    <div class="col-md-5 mx-auto p-3">
      <div class="card borde">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <h3>Metódo de pago:</h3>
              <div class="form-group">
                <input type="radio" value="ahora12" v-model="metodo" />
                <span>
                  Ahora 12
                  <img src="/img/ahora-12.jpg" class="medidas" alt="ahora-12" />
                </span>
              </div>
              <div class="form-group">
                <input type="radio" value="value18" v-model="metodo" />
                <span>
                  Ahora 18
                  <img src="/img/ahora-18.png" class="medidas" alt="ahora-18" />
                </span>
              </div>
              <div class="form-group">
                <input type="radio" value="transferencia" v-model="metodo" />
                <span> Transferencia (20% descuento)</span>
              </div>
              <div class="form-group">
                <input type="radio" value="mercado_pago" v-model="metodo" />
                <span>
                  Mercado Pago
                  <img
                    src="/img/mercado.png"
                    class="medidas"
                    alt="mercado pago"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group" v-if="metodo == 'transferencia'">
                <button class="btn btn-dark btn-block" @click="transf()">
                  Realizar transferencia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import useEnvio from "../../composables/useEnvio";

export default {
  name: "Envio-pago",
  setup() {
    const formEnvio = ref({});
    const metodo = ref();
    const router = useRouter();
     const toast = useToast();

    //OBTENER PRODUCTOS
    const productos = () => {
      const items = JSON.parse(localStorage.getItem("Items"));

      return items;
    };

    //OBTENER SUBTOTAL
    const subTotal = () => {
      var total = localStorage.getItem("Subtotal");

      return total;
    };

    //OBTENER ENVIO CRUZ DEL SUR
    const { costoEnvioDomicilio, costoEnvioSucursal } = useEnvio();

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
        } else if (formEnvio.value.entrega === "sucursal") {
          var costo = parseInt(costoEnvioSucursal.value) + 1;
        } else {
          var costo = 0;
        }
      } else {
        var costo = 0;
      }

      return costo;
    };


    //Datos del transporte
    const transporte = () => {
     
      const datosTransporte = {
        transporte: formEnvio.value.transporte,
        tipo_envio: formEnvio.value.entrega,
        costo: costoEnvio()
      }

      return datosTransporte;
    }

    //Descuento 
     const descuento = () => {
       const sumaTotal = parseInt(subTotal()) + costoEnvio()
       const desc = parseInt((sumaTotal * 20) / 100)

       return desc
     }

    //OBTENER TOTAL
    const total = () => {

      var total = localStorage.getItem("Subtotal");
      var costo = costoEnvio();
      var desc = descuento()

      if(metodo.value == 'transferencia'){

        var precio = (Number(total) + Number(costo)) - desc

      }else{
        
        var precio = Number(total) + Number(costo);
      }

      return precio;
    };

    //Numero operacion
    const operacion = () => {
      const numero_aleatorio = Math.floor(Math.random() * 99999 + 1);

      return numero_aleatorio;
    };

    //Transferencia
    const transf = () => {
      if (!formEnvio.value.entrega) {
          toast.warning("¡Elige un tipo de envio!", {
            timeout: 3000,
            position: "top-center",
          });
      } else {
        localStorage.setItem('Total', total())
        localStorage.setItem('Envio', JSON.stringify(transporte()))
         localStorage.setItem('Operacion', operacion())

        router.push("/finalizar-transferencia");
      }
    };

    return {
      productos,
      subTotal,
      costoEnvio,
      formEnvio,
      total,
      metodo,
      transf,
      descuento
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

.medidas {
  width: 55px !important;
  height: 35px !important;
}
</style>
