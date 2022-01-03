<template>
  <BasicLayout>
    <Banner />
    <Franja />
    <Video />
    <Categorias />
    <Frase />
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";
import Banner from "../components/Home/Banner";
import Franja from "../components/Home/Franja";
import Video from "../components/Home/Video";
import Categorias from "../components/Home/Categorias";
import Frase from "../components/Home/Frase";
import { API_TEST } from "../utils/constants";
import axios from "axios";

export default {
  name: "Home",
  components: {
    BasicLayout,
    Banner,
    Franja,
    Video,
    Categorias,
    Frase,
  },
  data() {
    return {
      payment_id: null,
      status: "",
    };
  },
  mounted: function() {
    this.payment_id = this.$route.query.payment_id;
    this.payment_status = this.$route.query.status;

    if (this.payment_status == "approved") {
      const cliente = JSON.parse(localStorage.getItem("Datos"));
      const total = localStorage.getItem("1Txl");
      const items = JSON.parse(localStorage.getItem("Items"));
      const envio = JSON.parse(localStorage.getItem("Evo"));
      const num_transaccion = this.payment_id;
      const operacion = localStorage.getItem("Op");
      const metodo = "Mercado Pago";

      const datos = {
        cliente,
        total,
        items: items[0],
        envio,
        num_transaccion,
        operacion,
        metodo,
      };

      axios
        .post(`${API_TEST}/api/mercado`, datos)
        .then((response) => {
          console.log(response);
          this.$toast.success(
            `¡Felicidades haz realizado tu compra con éxito por Mercado Pago! N° Operación: ${operacion}`
          );
        })
        .catch((err) => console.log(err));
    }

    //  axios.get('https://neorelax.com.ar/api/public/api/imagenes/'+this.id)
    //  .then(response => {

    //          this.listaImagenes = response.data;
    //          this.principal.imagen = response.data[0].imagen;

    //  })
  },
};
</script>
