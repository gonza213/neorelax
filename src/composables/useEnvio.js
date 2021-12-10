import {ref} from 'vue'
import axios from 'axios'
import {HOST, ULOGIN, UCLAVE, IDCLIENTE} from '../utils/constants';


const useEnvio = () => {

const costoEnvioDomicilio = ref(0)
const costoEnvioSucursal = ref(0)
const items = JSON.parse(localStorage.getItem("Items"));
const {localidad, codigo} = JSON.parse(localStorage.getItem("Datos"));

items.forEach(async (element) => {

    const cantidad = element.cantidad
    const alto = element.alto;
    const ancho = element.ancho;
    const largo = element.largo;
    const peso = element.peso;
    const valor = element.precio;
    const codigopostal = parseInt(codigo);
    const contrareembolso = 0
    
const {data} = await axios.get(`${HOST}/NuevaCotXMed`, {
    params: { 
        idcliente : IDCLIENTE,
        ulogin: ULOGIN,
        uclave: UCLAVE,
        ancho,
        largo,
        alto,
        peso,
        codigopostal,
        localidad,
        valor,
        contrareembolso
     },
     
  });

  const valor1 = data.Cotizaciones[1].Valor * cantidad
  const valor2 = data.Cotizaciones[0].Valor * cantidad

  costoEnvioDomicilio.value += valor1 
  costoEnvioSucursal.value += valor2 
    
});

return{
    costoEnvioDomicilio,
    costoEnvioSucursal
}


}

export default useEnvio;


// var cantidad = item.cantidad;
//   var alto = item.alto;
//   var ancho = item.ancho;
//   var largo = item.largo;
//   var peso = item.peso;
//   var precio = item.precio;
//   var localidad = "La Plata";
//   var cp = 1900;
