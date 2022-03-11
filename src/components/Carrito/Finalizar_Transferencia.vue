<template>
  <div class="row">
    <div class="col-md-8 mx-auto p-4">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="text-primary">N° de operación: #{{ operacion() }}</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 p-2">
                  <div class="card w-100 h-100  border-top border-info">
                    <div class="card-body">
                      <p>
                        <span class="text-info"
                          >Datos del cliente: <i class="fas fa-user"></i
                        ></span>
                        <br />
                        Nombre y Apellido: {{ datos().nombre }}
                        {{ datos().apellidos }} <br />
                        DNI: {{ datos().dni }} <br />
                      </p>
                      <p>
                        <span class="text-info"
                          >Datos del Envio: <i class="fas fa-truck"></i>
                        </span>
                        <br />
                        Transporte: {{ envio().transporte }}
                        <br />
                        Entrega:
                        <span class="text-capitalize">{{
                          envio().tipo_envio
                        }}</span>
                        <br />
                        <span
                          >Costo: ${{
                            Intl.NumberFormat("de-DE").format(envio().costo)
                          }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 p-2">
                  <div class="card w-100 h-100 border-top border-info">
                    <div class="card-body">
                      <span class="text-info"
                        >Productos: <i class="fas fa-list"></i>
                      </span>
                      <template v-for="item in productos()" :key="item">
                        <p>
                          <i class="fas fa-check"></i> {{ item.titulo }}
                          <span class="float-right"
                            >{{ item.cantidad }} x ${{
                              Intl.NumberFormat("de-DE").format(item.precio)
                            }}</span
                          >
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
                            >${{
                              Intl.NumberFormat("de-DE").format(total())
                            }}</b
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
                    enctype="multipart/form-data"
                    @submit.prevent="enviarTransferencia"
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

      // await axios
      //   .post("http://localhost/neorelax/upload.php", archivo, {
      //     header: { "Content-Type": "multipart/form-data" },
      //   })
      //   .then((response) => {
        
      //     localStorage.setItem("Archivo", this.nombre);
      //   });
    },
  },
  mounted() {
    this.collection_id = this.$route.query.collection_id;
    console.log(this.collection_id);
  },
  setup() {
     const toast = useToast();
     const router = useRouter();
    //Numero operacion
    const operacion = () => {
      const numero_aleatorio = JSON.parse(localStorage.getItem("Op"));

      return numero_aleatorio;
    };

    //Datos del cliente
    const datos = () => {
      const cliente = JSON.parse(localStorage.getItem("Datos"));

      return cliente;
    };

    //Datos del envio
    const envio = () => {
      const datos = JSON.parse(localStorage.getItem("Evo"));

      return datos;
    };

    // Datos de los items
    const productos = () => {
      const items = JSON.parse(localStorage.getItem("Items"));

      return items;
    };

    //Total
    const total = () => {
      const tot = JSON.parse(localStorage.getItem("1Txl"));

      return tot;
    };

    const enviarTransferencia = async () => {
      const archivo = localStorage.getItem("Archivo");

      const dato = {
        cliente: datos(),
        envio: envio(),
        productos: productos(),
        total: total(),
        operacion: operacion(),
        metodo: "Transferencia",
        archivo: archivo,
      };

      if (archivo) {
        const resp = await transferenciaApi(dato);
         toast.success("¡Felicidades haz realizado tu compra con éxito!", {
            timeout: 4000,
            position: "top-center",
          });

          router.push('/')
      } else {
         toast.warning("¡Adjunte el comprobante para finalizar!", {
            timeout: 4000,
            position: "top-center",
          });
      }
    };

    return {
      operacion,
      datos,
      envio,
      productos,
      total,
      enviarTransferencia,
    };
  },
};
</script>

<style></style>
