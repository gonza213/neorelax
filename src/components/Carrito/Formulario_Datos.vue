<template>
  <form @submit.prevent="subirDatos">
    <div class="row">
      <div class="col-md-9 p-3 mx-auto">
        <div class="col-md-12">
          <div class="card borde">
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
                      v-model="formDatos.nombre"
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
                      v-model="formDatos.apellidos"
                      :class="{ error: formError.apellidos }"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">DNI: <b class="text-danger">*</b></label>
                    <input
                      type="number"
                      class="form-control form"
                      v-model="formDatos.dni"
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
                      v-model="formDatos.tel"
                      :class="{ error: formError.tel }"
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
                      v-model="formDatos.email"
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
                      v-model="formDatos.domicilio"
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
                      v-model="formDatos.numero"
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
                      v-model="formDatos.piso"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="">Departamento:</label>
                    <input
                      type="text"
                      class="form-control form"
                      v-model="formDatos.dpto"
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
                      v-model="formDatos.provincia"
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
                      v-model="formDatos.localidad"
                      :class="{ error: formError.localidad }"
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
                      v-model="formDatos.codigo"
                      :class="{ error: formError.codigo }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 p-3 mb-2 mx-auto">
        <button class="btn btn-info float-right">
          Continuar <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';
import * as Yup from "yup";
import { subirFormulario } from "../../api/formulario-datos";
import {getEnvio} from '../../api/envios';

export default {
  name: "Formulario-Datos",
  props: {
    products: Array,
  },
  setup(props) {
    let formDatos = ref({});
    let formError = ref({});
    const router = useRouter();

    const schemaForm = Yup.object().shape({
      nombre: Yup.string().required(true),
      apellidos: Yup.string().required(true),
      dni: Yup.string().required(true),
      tel: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
      domicilio: Yup.string().required(true),
      numero: Yup.string().required(true),
      provincia: Yup.string().required(true),
      localidad: Yup.string().required(true),
      codigo: Yup.string().required(true),
    });

    const subirDatos = async () => {
      formError.value = {};

      const productos = props.products;
      let products = [];
      let total = 0;
   

      //PRODUCTOS ARREGLO
      const obtener = productos.map((items) => {
        const item = items[0];

        var titulo = item.titulo;
        var sinPunto = item.precio.replace(/[$.]/g, "");
        var precio = parseInt(sinPunto);
        var cantidad = items.quantity;
        var alto = parseInt(item.alto);
        var ancho = parseInt(item.ancho);
        var largo = parseInt(item.largo);
        var peso = parseInt(item.peso);
        var volumen = alto * ancho * largo;


        total += precio * cantidad;


        products.push({
          titulo,
          cantidad,
          precio,
          alto,
          ancho,
          peso,
          largo,
          volumen,
        });
      });

      //OBTENER DATOS PERSONALES
      const datos = {
        nombre: formDatos.value.nombre,
        apellidos: formDatos.value.apellidos,
        dni: formDatos.value.dni,
        tel: formDatos.value.tel,
        email: formDatos.value.email,
        domicilio: formDatos.value.domicilio,
        numero: formDatos.value.numero,
        pais: "Argentina",
        provincia: formDatos.value.provincia,
        localidad: formDatos.value.localidad,
        codigo: formDatos.value.codigo,
      };

  

      try {
        await schemaForm.validate(formDatos.value, { abortEarly: false });


        try {
          const response = await subirFormulario(datos, products, total);

          router.push('/envio-metodo-pago')
        } catch (error) {
          console.log(error);
        }


      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };

    return {
      formDatos,
      formError,
      subirDatos,
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

.borde{
  border-top: 3px solid #000;
}
</style>
