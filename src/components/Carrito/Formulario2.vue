<template>
  <form @submit.prevent="crearPedido">
    <div class="row">
      <div class="col-md-7 p-3">
        <div class="col-md-12">
          <div class="card" style="box-shadow: 3px 0px 4px #888888">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="color-verde text-uppercase">Datos Personales:</h3>
                  <small class="text-danger">(*) Campos obligatorios.</small>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Nombres: <b class="text-danger">*</b></label>
                    <input
                      type="text"
                      class="form-control form"
                      v-model="form.nombre"
                      :class="{ error: formError.nombre }"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for=""
                      >Apellidos: <b class="text-danger">*</b></label
                    >
                    <input
                      type="text"
                      class="form-control form"
                      v-model="form.apellido"
                      :class="{ error: formError.apellido }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">DNI: <b class="text-danger">*</b></label>
                    <input
                      type="number"
                      class="form-control form"
                      v-model="form.dni"
                      :class="{ error: formError.dni }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Teléfono: <b class="text-danger">*</b></label>
                    <input
                      type="number"
                      class="form-control form"
                      v-model="form.tel"
                      :class="{ error: formError.tel}"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for=""
                      >Correo electrónico: <b class="text-danger">*</b></label
                    >
                    <input
                      type="email"
                      class="form-control form"
                      v-model="form.email"
                      :class="{ error: formError.email }"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for=""
                      >Domicilio: <b class="text-danger">*</b></label
                    >
                    <input
                      type="text"
                      class="form-control form"
                      v-model="form.domicilio"
                      :class="{ error: formError.domicilio }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">N°: <b class="text-danger">*</b></label>
                    <input
                      type="number"
                      class="form-control form"
                      v-model="form.numero"
                      :class="{ error: formError.numero }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Piso:</label>
                    <input
                      type="number"
                      class="form-control form"
                      v-model="form.piso"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Departamento:</label>
                    <input
                      type="text"
                      class="form-control form"
                      v-model="form.dpto"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="">País: <b class="text-danger">*</b></label>
                    <input
                      type="text"
                      class="form-control form"
                      value="Argentina"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for=""
                      >Provincia: <b class="text-danger">*</b></label
                    >
                    <input
                      type="text"
                      class="form-control form text-capitalize"
                      v-model="form.provincia"
                      :class="{ error: formError.provincia }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for=""
                      >Ciudad/Localidad: <b class="text-danger">*</b></label
                    >
                    <input
                      type="text"
                      class="form-control form text-capitalize"
                      v-model="form.ciudad"
                      :class="{ error: formError.ciudad }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for=""
                      >Código Postal: <b class="text-danger">*</b></label
                    >
                    <input
                      type="number"
                      class="form-control form"
                      v-model="form.codigo"
                      :class="{ error: formError.codigo }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-4">
          <div class="card">
            <div class="card-header bg-light">
              <h4 class="color-verde text-uppercase">Formulario de envío</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for=""
                      >Elige el medio de transporte:
                      <b class="text-danger">*</b></label
                    >
                    <select
                      class="form-control form"
                      v-model="formEnvio.transporte"
                      :class="{ error: formError2.transporte }"
                    >
                      <option value="Andreani">Andreani</option>
                      <option value="Cruz">Cruz del Sur</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for=""
                      >Tipo de Entrega: <b class="text-danger">*</b></label
                    >
                    <select class="form-control form" v-model="formEnvio.tipo" :class="{ error: formError2.tipo }">
                      <option value="R">Sucursal</option>
                      <option value="E">Domicilio</option>
                    </select>
                  </div>
                </div>
                <div
                  class="col-md-12"
                  v-if="formEnvio.transporte == 'Cruz' && formEnvio.tipo == 'R'"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Elige Provincia</label>
                        <select
                          class="form-control form"
                          v-model="formEnvio.provincia"
                        >
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Elige Ciudad:</label>
                        <select
                          class="form-control form"
                          v-model="formEnvio.ciudad"
                        >
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="">Elige Sucursal:</label>
                        <select
                          class="form-control form"
                          v-model="formEnvio.sucursal"
                        >
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Elige CP:</label>
                        <select
                          class="form-control form"
                          v-model="formEnvio.cp"
                        >
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-12"
                  v-if="
                    formEnvio.transporte == 'Andreani' && formEnvio.tipo == 'R'
                  "
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Elige Provincia</label>
                        <select class="form-control form">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Elige Ciudad:</label>
                        <select class="form-control form">
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="">Elige Sucursal:</label>
                        <select class="form-control form">
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="">Elige CP:</label>
                        <select class="form-control form">
                          <template>
                            <option></option>
                          </template>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-12"
                  v-if="formEnvio.transporte == 'Cruz' && formEnvio.tipo == 'E'"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for=""> Provincia</label>
                        <input
                          type="text"
                          class="form-control form text-capitalize"
                          v-model="form.provincia"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for=""> Ciudad:</label>
                        <input
                          type="text"
                          class="form-control form text-capitalize"
                          v-model="form.ciudad"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for=""> Domicilio:</label>
                        <input
                          type="text"
                          class="form-control form text-capitalize"
                          v-model="form.domicilio"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="">N°:</label>
                        <input
                          type="text"
                          class="form-control form text-capitalize"
                          v-model="form.numero"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for=""> CP:</label>
                        <input
                          type="text"
                          class="form-control form text-capitalize"
                          v-model="form.codigo"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 p-3">
        <div class="row">
          <div class="col-md-12">
            <div class="card" style="box-shadow: 3px 0px 4px 4px #888888">
              <div class="card-header">
                <h3 class="text-center text-uppercase color-verde">
                  Tu pedido
                  <router-link
                    to="/carrito"
                    class="float-right btn btn-info btn-sm"
                    style="text-transform: none"
                    ><i class="fas fa-arrow-left"></i> Volver al
                    carrito</router-link
                  >
                </h3>
              </div>
              <div class="card-body fondo-verde text-dark">
                <ul class="list-group">
                  <li class="list-group-item lista">
                    <h5 class="text-uppercase">Productos</h5>
                  </li>
                  <li class="list-group-item lista">
                    <p
                      class=" text-dark"
                      v-for="product in products"
                      :key="product.id"
                    >
                      <span v-if="product[0].precio != '0'"
                        ><i class="fas fa-check-circle text-white"></i>
                        {{ product[0].titulo }}</span
                      >
                      <span class="float-right" v-if="product[0].precio != '0'"
                        >{{ product.quantity
                        }}<b class="text-white ml-1 mr-1">x</b>${{
                          product[0].precio
                        }}</span
                      >
                    </p>
                  </li>
                  <li class="list-group-item lista">
                    <h5 class="text-uppercase">
                      Subtotal
                      <b class="float-right text-white"
                        >${{ obtenerSubTotal() }}</b
                      >
                    </h5>
                  </li>
                  <li
                    class="list-group-item lista"
                    v-if="formPago.picked == 'transf'"
                  >
                    <p class="text-uppercase">
                      Descuento 20%:
                      <b class="float-right text-white"
                        >-${{
                          Intl.NumberFormat("de-DE").format(
                            obtenerDescuento().posdescuento
                          )
                        }}</b
                      >
                    </p>
                  </li>
                  <li class="list-group-item lista">
                    <!-- <template> -->
                    <p class="text-uppercase">
                      Envio:
                      <b class="float-right text-white">${{ costoEnvios }}</b>
                    </p>
                    <!-- </template> -->
                  </li>
                  <li class="list-group-item lista ">
                    <h4
                      class="text-uppercase border-bottom border-top"
                      v-if="formPago.picked == 'transf'"
                    >
                      Total
                      <b class="float-right text-white"
                        >${{
                          Intl.NumberFormat("de-DE").format(
                            obtenerDescuento().total
                          )
                        }}</b
                      >
                    </h4>
                    <h4 class="text-uppercase border-bottom border-top" v-else>
                      Total
                      <b class="float-right text-white"
                        >${{ obtenerTotal() }}</b
                      >
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <ul class="list-group p-3 mt-2">
              <h5 class="mb-2">Opciones de pago</h5>
              <li class="list-group-item p-0">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="radio"
                        id="ahora12"
                        value="ahora12"
                        aria-label="radio for following text input"
                        v-model="formPago.picked"
                      />
                    </div>
                    <span class="ml-2"
                      >Ahora 12
                      <img src="/img/ahora-12.jpg" class="p-1" width="70px"
                    /></span>
                  </div>
                </div>
              </li>
              <li class="list-group-item p-0">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="radio"
                        id="ahora18"
                        value="ahora18"
                        aria-label="radio for following text input"
                        v-model="formPago.picked"
                      />
                    </div>
                    <span class="ml-2"
                      >Ahora 18
                      <img src="/img/ahora-18.png" class="p-1" width="75px"
                    /></span>
                  </div>
                </div>
              </li>
              <li class="list-group-item p-0">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="radio"
                        id="mercado"
                        value="mercado"
                        aria-label="radio for following text input"
                        v-model="formPago.picked"
                      />
                    </div>
                    <span class="ml-2"
                      >Tarjeta crédito/débito
                      <img src="/img/mercado.png" class="p-1" width="50px"
                    /></span>
                  </div>
                </div>
              </li>
              <li class="list-group-item p-0">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input
                        type="radio"
                        id="transf"
                        value="transf"
                        aria-label="radio for following text input"
                        v-model="formPago.picked"
                      />
                    </div>
                    <span class="ml-2"
                      >Transferencia Bancaria (20% de descuento)</span
                    >
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <button
                  v-if="formPago.picked == 'transf'"
                  class="btn btn-dark btn-block text-uppercase"
                  id="btnT"
                >
                  <i class="fas fa-arrow-right"></i> Continuar Compra
                </button>
                <button
                  v-if="formPago.picked == 'ahora12'"
                  class="btn btn-secondary btn-block text-uppercase"
                  id="btnA"
                >
                  <i class="fas fa-cart-plus"></i> Continuar Compra
                </button>
                <button
                  v-if="formPago.picked == 'ahora18'"
                  class="btn btn-secondary btn-block text-uppercase"
                  id="btnA"
                >
                  <i class="fas fa-cart-plus"></i> Continuar Compra
                </button>
                <button
                  v-if="formPago.picked == 'mercado'"
                  class="btn btn-secondary btn-block text-uppercase"
                  id="btnM"
                >
                  <i class="fas fa-cart-plus"></i> Continuar Compra
                </button>
           
              </li>
            </ul>
            <!-- <div class="tokenizer-container"></div> -->
      
          </div>
         
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, watchEffect } from "vue";
import {useRouter} from 'vue-router';
import * as Yup from "yup";
import { useToast } from "vue-toastification";
import { getEnvio } from "../../api/envios";


export default {
  name: "Formulario",
  props: {
    products: Array,
  },
  setup(props) {
    const form = ref({});
    const formEnvio = ref({});
    let formError = ref({});
    let formError2 = ref({});
    const formPago = ref({});
    const costoEnvios = ref(0);
    let router = useRouter();
    const toast = useToast();

    const schemaForm = Yup.object().shape({
      nombre: Yup.string().required(true),
      apellido: Yup.string().required(true),
      dni: Yup.string().required(true),
      tel: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
      domicilio: Yup.string().required(true),
      numero: Yup.string().required(true),
      provincia: Yup.string().required(true),
      ciudad: Yup.string().required(true),
      codigo: Yup.string().required(true)
    });

    const schemaForm2 = Yup.object().shape({
      transporte: Yup.string().required(true),
      tipo: Yup.string().required(true),
    });


    //OBTENER PRODUCTOS
    const obtenerProductos = () => {
      let productos = props.products;

      let items = [];

      if (productos === null) {
        console.log("No hay productos");
      } else {
        productos.forEach((product) => {
          var titulo = product[0].titulo;
          var precio = parseInt(product[0].precio);
          var cantidad = product.quantity;
          var alto = parseFloat(product[0].alto);
          var ancho = parseFloat(product[0].ancho);
          var peso = parseFloat(product[0].peso);
          var largo = parseFloat(product[0].largo);
          items.push({ titulo, precio, cantidad, alto, ancho, peso, largo });
        });

        return {
          items,
        };
      }
    };

    //OBTENER INFO CLIENTE
    const Cliente = () => {
      if (form.value.piso) {
        var piso = form.value.piso;
      } else {
        var piso = "-";
      }

      if (form.value.dpto) {
        var dpto = form.value.dpto;
      } else {
        var dpto = "-";
      }

      var infoCliente = {
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        dni: form.value.dni,
        tel: form.value.tel,
        email: form.value.email,
        domicilio: form.value.domicilio,
        numero: form.value.numero,
        piso: piso,
        dpto: dpto,
        pais: "Argentina",
        provincia: form.value.provincia,
        ciudad: form.value.ciudad,
        codigo_postal: form.value.codigo,
      };

      return infoCliente;
    };

    watchEffect(async () => {
      let obtener = obtenerProductos();
      let ciudad = form.value.ciudad;
      let codigo_postal = form.value.codigo;
      let tipo_envio = formEnvio.value.tipo;
      //COSTO ENVIO CRUZ DEL SUR
      obtener.items.forEach(async (element) => {
        var cantidad = element.cantidad;
        var costo = element.precio;
        var ancho = element.ancho;
        var alto = element.alto;
        var peso = element.peso;
        var largo = element.largo;
        var localidad = ciudad;
        var cp = codigo_postal;

        if (formEnvio.value.transporte == "Cruz") {
          var response = await getEnvio(
            localidad,
            cp,
            costo,
            alto,
            ancho,
            peso,
            largo
          );
          if (tipo_envio == "E") {
            costoEnvios.value = response.Cotizaciones[0].Valor * cantidad;
          } else if (tipo_envio == "R") {
            costoEnvios.value = response.Cotizaciones[1].Valor * cantidad;
          }
        } else if (formEnvio.value.transporte == "Andreani") {
          costoEnvios.value = 0;
        }
      });
    });

    // COSTO ENVIO ANDREANI
    const costoAndreani = () => {
      var costo = 400;

      return costo;
    };

    //OBTENER INFO ENVIO
    const Envio = () => {
      const costoEnvio = costoEnvios.value;
      if (formEnvio.value.tipo == "R") {
        var provincia = formEnvio.value.provincia;
        var ciudad = formEnvio.value.ciudad;
        var sucursal = "Sucursal: " + formEnvio.value.sucursal;
        var cp = formEnvio.value.cp;
      } else {
        var provincia = form.value.provincia;
        var ciudad = form.value.ciudad;
        var sucursal =
          "Domicilio: " + form.value.domicilio + " " + "N°" + form.value.numero;
        var cp = form.value.codigo;
      }

      if (formEnvio.value.transporte == "Cruz") {
        var costo = costoEnvio;
        var transporte = "Cruz del Sur";
      } else if (formEnvio.value.transporte == "Andreani") {
        var costo = 0;
        var transporte = "Andreani";
      }

      var infoEnvio = {
        transporte: transporte,
        tipo_envio: formEnvio.value.tipo,
        provincia: provincia,
        ciudad: ciudad,
        domicilio: sucursal,
        cp: cp,
        costo: costo,
      };

      return infoEnvio;
    };

    //OBTENER SUBTOTAL
    const obtenerSubTotal = () => {
      let precios = props.products;

      let totalTemp = 0;

      if (precios === null) {
        console.log("No hay productos");
      } else {
        precios.forEach((product) => {
          let precio = product[0].precio.replace(/[$.]/g, "");
          totalTemp += parseInt(precio) * product.quantity;
        });

        return new Intl.NumberFormat("de-DE").format(totalTemp);
      }
    };

    //OBTENER Descuento
    const obtenerDescuento = () => {
      var pos = new String(obtenerSubTotal()).replace(/[$.]/g, "");
      var subtotal = parseInt(pos);
      var descuento = 20;
      var envio = parseInt(costoEnvios.value);

      var posdescuento = (subtotal * descuento) / 100;
      var total = subtotal - posdescuento + envio;

      return {
        total,
        posdescuento,
      };
    };

    //OBTENER TOTAL + ENVIO
    const obtenerTotal = () => {
      var pos = new String(obtenerSubTotal()).replace(/[$.]/g, "");
      var subtotal = parseInt(pos);
      var envio = parseInt(costoEnvios.value);

      var total = subtotal + envio;

      return new Intl.NumberFormat("de-DE").format(total);
    };



    const crearPedido = async () => {

       formError.value = {};
       formError2.value = {};

      var num = Math.floor(Math.random() * 99999 + 1);
      var cliente = Cliente();
      var envio = Envio();
      var productos = obtenerProductos();

      if (formPago.value.picked == "transf") {
        var total = Intl.NumberFormat("de-DE").format(obtenerDescuento().total);
        var metodo = "Transferencia";
      } else {
        if (formPago.value.picked == "ahora12") {
          var metodo = "Ahora 12";
        } else if (formPago.value.picked == "ahora18") {
          var metodo = "Ahora 18";
        } else if (formPago.value.picked == "mercado") {
          var metodo = "Mercado Pago";
        }
        var total = obtenerTotal();
      }

      const data = {
        cliente: cliente,
        envio: envio,
        productos: productos,
        total: total,
        operacion: num,
        metodo: metodo,
      };


      try {

        await schemaForm.validate(form.value, { abortEarly: false });

        try {

              await schemaForm2.validate(formEnvio.value, { abortEarly: false });
      
             if(metodo == "Transferencia"){
               localStorage.setItem('Transferencia', JSON.stringify(data));

               router.push('/finalizar-transferencia');
             }
          
        } catch (error) {
          console.log(error);
          error.inner.forEach((err) => {
          // formError.value[err.path] = err.message;
          formError2.value[err.path] = err.message;
        });

        toast.warning("¡Complete todos los campos requeridos del envio (*)!", {
            timeout: 3000,
            position: "top-center",
          });

        }
      } catch (error) {
    error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
   
        });
 
        toast.warning("¡Complete todos los campos requeridos (*)!", {
            timeout: 3000,
            position: "top-center",
          });

      }
    };

    return {
      form,
      formEnvio,
      formError,
      formError2,
      formPago,
      obtenerSubTotal,
      obtenerDescuento,
      obtenerTotal,
      crearPedido,
      costoEnvios,
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

li .lista {
  border: 2px solid #aaa !important;
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
</style>
