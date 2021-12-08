<template>
  <div class="row">
    <div class="col-md-8 mx-auto p-4">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="text-primary">
                N° de operación: #{{ obtenerDatos().operacion }}
              </h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 p-2">
                  <div class="card w-100 h-100  border-top border-info">
                    <div class="card-body">
                      <p>
                        <span class="text-info">Datos del cliente:</span>
                        <br />
                        Cliente: {{ obtenerDatos().cliente.nombre }}
                        {{ obtenerDatos().cliente.apellido }} <br />
                        DNI: {{ obtenerDatos().cliente.dni }} <br />
                        Ciudad: {{ obtenerDatos().cliente.ciudad }} <br />
                        Provincia: {{ obtenerDatos().cliente.provincia }}
                      </p>
                      <p>
                        <span class="text-info">Datos del Envio:</span>
                        <br />
                        Transporte: {{ obtenerDatos().envio.transporte }}
                        <br />
                        <span v-if="obtenerDatos().envio.tipo_envio == 'E'"
                          >Entrega a domicilio</span
                        >
                        <span v-else>Entrega en Sucursal</span> <br />
                        <span
                          >Costo: ${{
                            Intl.NumberFormat("de-DE").format(
                              obtenerDatos().envio.costo
                            )
                          }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 p-2">
                  <div class="card w-100 h-100 border-top border-info">
                    <div class="card-body">
                      <span class="text-info">Productos:</span>
                      <template
                        v-for="item in obtenerDatos().productos"
                        :key="item"
                      >
                        <p>
                          <i class="fas fa-check-circle"></i>
                          {{ item[0].titulo }} - {{ item[0].cantidad }}x${{
                            item[0].precio
                          }}
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mt-3 mb-3">
                  <div class="row">
                    <div class="col-md-4">
                      <p>Descuento: 20%</p>
                    </div>
                    <div class="col-md-8">
                      <h4 class="text-right">
                        <span>
                          Total a transferir:
                          <b class="text-success"
                            >${{ obtenerDatos().total }}</b
                          ></span
                        >
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="card border-top border-secondary">
                    <div class="card-body">
                      <h4 class="text-dark">Datos Bancarios:</h4>
                      <p>
                        CUENTA:
                        <span class="text-secondary">
                          INDUSTRIAS LECOS S R.L</span
                        >
                      </p>
                      <p>
                        BANCO:
                        <span class="text-secondary">CREDICOOP SUC WILDE</span>
                      </p>
                      <p>
                        CBU:
                        <span class="text-secondary"
                          >1910061255006100192500</span
                        >
                      </p>
                      <p>
                        CUIT:
                        <span class="text-secondary">30-71111456-0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 p-3">
                  <form
                    method="POST"
                    @submit.prevent="enviarFormulario"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <label for="#adjuntar">Adjuntar Comprobante</label>
                      <input
                        type="file"
                        id="adjuntar"
                        class="form-control-file"
                        ref="file"
                        @change="fileUpload"
                      />
                    </div>
                    <div class="form-group">
                      <button class="btn btn-dark btn-block mt-2">
                        <i class="fas fa-shopping-cart"></i> Finalizar Compra
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <p>{{ collection_id }}</p>
          <input type="text" v-model="collection_id" readonly /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { transferenciaApi } from "../../api/transferencia";

export default {
  data() {
    return {
      collection_id: "",
      file: "",
      nombre: "",
    };
  },
  methods: {
    async fileUpload() {
      this.file = this.$refs.file.files[0];
      this.nombre = this.$refs.file.files[0].name;
      const archivo = new FormData();
      archivo.append("archivo", this.file);

      await axios
        .post("https://neorelax.com.ar/upload.php", archivo, {
          header: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("Archivo", this.nombre);
        });
    },
  },
  mounted() {
    this.collection_id = this.$route.query.collection_id;
    console.log(this.collection_id);
  },
  setup() {
    const toast = useToast();
    let router = useRouter();

    //OBTENER DATOS
    const obtenerDatos = () => {
      var info = localStorage.getItem("Transferencia");

      return JSON.parse(info);
    };

    //ENVIAR FORMULARIO
    const enviarFormulario = async () => {
      var archivo = localStorage.getItem("Archivo");

      var form = {
        cliente: obtenerDatos().cliente,
        envio: obtenerDatos().envio,
        productos: obtenerDatos().productos,
        total: obtenerDatos().total,
        operacion: obtenerDatos().operacion,
        metodo: obtenerDatos().metodo,
        archivo: archivo,
      };

      if (archivo) {
        try {
          const response = await transferenciaApi(form);

          toast.success("¡Has realizado la transferencia exitosamente!", {
            timeout: 3000,
            position: "top-center",
          });

          localStorage.removeItem("Transferencia");
          localStorage.removeItem("Archivo");
          localStorage.removeItem("productos");

          router.push("/");
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warning("¡Debes adjuntar el comprobante!", {
          timeout: 3000,
          position: "top-center",
        });
      }
    };

    return {
      obtenerDatos,
      enviarFormulario,
    };
  },
};
</script>

<style></style>
