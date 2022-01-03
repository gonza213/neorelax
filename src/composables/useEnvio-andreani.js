import { ref } from "vue";
import axios from "axios";
import { API_ANDREANI, CONTRATO_A } from "../utils/constants";

const useEnvioAndreani = () => {
  const envio = ref(0);
  const items = JSON.parse(localStorage.getItem("Items"));
  const { codigo } = JSON.parse(localStorage.getItem("Datos"));

  items.forEach((element) => {
    const cantidad = element.cantidad;
    const alto = element.alto;
    const ancho = element.ancho;
    const largo = element.largo;
    const peso = element.peso;
    const valor = element.precio;
    const codigopostal = parseInt(codigo);
    const volumen = alto * ancho * largo;

    axios
      .get(
        `${API_ANDREANI}/v1/tarifas?cpDestino=${codigopostal}&contrato=${CONTRATO_A}&bultos%5B0%5D%5BvalorDeclarado%5D=${valor}&bultos%5B0%5D%5Bvolumen%5D=${volumen}&bultos%5B0%5D%5Bkilos%5D=${peso}`
      )
      .then((response) => {
        const { total } = response.data.tarifaConIva;

        const envioT = total * cantidad;

        envio.value += envioT;
      });
  });

  return {
    envio,
  };
};

export default useEnvioAndreani;
