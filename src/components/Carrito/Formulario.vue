<template>
     
      <form @submit.prevent="createOrder">
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
                                                <input type="text" class="form-control form" v-model="formData.nombre" :class="{error: formError.nombre}">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="">Apellidos: <b class="text-danger">*</b></label>
                                                    <input type="text" class="form-control form" v-model="formData.apellido" :class="{error: formError.apellido}">
                                                </div>
                                        </div> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">DNI: <b class="text-danger">*</b></label>
                                                <input type="number" class="form-control form" v-model="formData.dni" :class="{error: formError.dni}">
                                            </div>
                                        </div> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Teléfono: <b class="text-danger">*</b></label>
                                                <input type="number" class="form-control form" v-model="formData.tel" :class="{error: formError.tel}">
                                            </div>
                                        </div> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Correo electrónico: <b class="text-danger">*</b></label>
                                                <input type="email" class="form-control form" v-model="formData.email" :class="{error: formError.email}">
                                            </div>
                                        </div>   
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="">Domicilio: <b class="text-danger">*</b></label>
                                                <input type="text" class="form-control form" v-model="formData.domicilio" :class="{error: formError.domicilio}">
                                            </div>
                                        </div> 
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">N°: <b class="text-danger">*</b></label>
                                                <input type="number" class="form-control form" v-model="formData.numero" :class="{error: formError.numero}">
                                            </div>
                                        </div>   
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Piso:</label>
                                                <input type="number" class="form-control form" v-model="formData.piso">
                                            </div>
                                        </div>  
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Departamento:</label>
                                                <input type="text" class="form-control form" v-model="formData.departamento">
                                            </div>
                                        </div> 
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="">País: <b class="text-danger">*</b></label>
                                                <input type="text" class="form-control form" value="Argentina"  readonly>
                                            </div>
                                        </div>  
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Provincia: <b class="text-danger">*</b></label>
                                                <input type="text" class="form-control form text-capitalize" v-model="formData.provincia" :class="{error: formError.provincia}">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Ciudad/Localidad: <b class="text-danger">*</b></label>
                                                    <input type="text" class="form-control form text-capitalize" v-model="formData.ciudad" :class="{error: formError.ciudad}">
                                                </div>
                                        </div>    
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Código Postal: <b class="text-danger">*</b></label>
                                                    <input type="number" class="form-control form" v-model="formData.codigo" :class="{error: formError.codigo}">
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
                                            <label for="">Elige el medio de transporte: <b class="text-danger">*</b></label>
                                            <select class="form-control form" v-model="formData.transporte" :class="{error: formError.transporte}">
                                                <option value="Cruz del Sur">Cruz del Sur</option>
                                                <option value="Andreani">Andreani</option>
                                            </select>
                                       </div>                                 
                                   </div>
                                   <div class="col-md-6">
                                       <div class="form-group">
                                           <label for="">Tipo de Entrega: <b class="text-danger">*</b></label>
                                           <select class="form-control form" v-model="formData.selected" :class="{error: formError.selected}">
                                               <option value="R">Sucursal</option>
                                               <option value="E">Domicilio</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div class="col-md-12" v-if="formData.transporte == 'Cruz del Sur' && formData.selected == 'R'">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Elige Provincia</label>
                                                    <select class="form-control form" v-model="formData.prov">
                                                    <option v-for="item in provincias" :key="item">{{item}}</option>
                                                </select>
                                               </div>
                                           </div>
                                             <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Elige Ciudad:</label>
                                                    <select class="form-control form" v-model="formData.localidad">
                                                    <template v-for="item in destinos" :key="item">
                                                        <option v-if="item.Provincia == formData.prov" :value="item.Ciudad">{{item.Ciudad}}</option>
                                                    </template>
                                                </select>
                                               </div>
                                           </div>
                                            <div class="col-md-8">
                                               <div class="form-group">
                                                   <label for="">Elige Sucursal:</label>
                                                    <select class="form-control form" v-model="formData.sucursal">
                                                    <template v-for="item in destinos" :key="item">
                                                        <option v-if="item.Ciudad == formData.localidad">{{item.Domicilio}}</option>
                                                    </template>
                                                </select>
                                               </div>
                                           </div>
                                            <div class="col-md-4">
                                               <div class="form-group">
                                                   <label for="">Elige CP:</label>
                                                    <select class="form-control form" v-model="formData.cp">
                                                    <template v-for="item in destinos" :key="item">
                                                        <option v-if="item.Ciudad == formData.localidad" :value="item.CP">{{item.CP}}</option>
                                                    </template>
                                                </select>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                    <div class="col-md-12" v-if="formData.transporte == 'Andreani' && formData.selected == 'R'">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Elige Provincia</label>
                                                    <select class="form-control form" v-model="formData.prov">
                                                    <option v-for="item in provinciasA" :key="item">{{item}}</option>
                                                </select>
                                               </div>
                                           </div>
                                             <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Elige Ciudad:</label>
                                                    <select class="form-control form" v-model="formData.localidad">
                                                    <template v-for="item in destinosA" :key="item">
                                                        <option v-if="item.direccion.provincia == formData.prov && item.datosAdicionales.tipo == 'SUCURSAL' && item.datosAdicionales.seHaceAtencionAlCliente == true" :value="item.direccion.localidad">{{item.direccion.localidad}}</option>
                                                    </template>
                                                     </select>
                                               </div>
                                           </div>
                                            <div class="col-md-8">
                                               <div class="form-group">
                                                   <label for="">Elige Sucursal:</label>
                                                    <select class="form-control form" v-model="formData.sucursal">
                                                    <template v-for="item in destinosA" :key="item">
                                                        <option v-if="item.direccion.localidad == formData.localidad && item.datosAdicionales.tipo == 'SUCURSAL' && item.datosAdicionales.seHaceAtencionAlCliente == true">{{item.direccion.calle}} n°{{item.direccion.numero}}</option>
                                                    </template>
                                                </select>
                                               </div>
                                           </div>
                                            <div class="col-md-4">
                                               <div class="form-group">
                                                   <label for="">Elige CP:</label>
                                                    <select class="form-control form" v-model="formData.cp">
                                                    <template v-for="item in destinosA" :key="item">
                                                        <option  v-if="item.direccion.localidad == formData.localidad && item.datosAdicionales.tipo == 'SUCURSAL' && item.datosAdicionales.seHaceAtencionAlCliente == true" :value="item.direccion.codigoPostal">{{item.direccion.codigoPostal}}</option>
                                                    </template>
                                                </select>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                    <div class="col-md-12" v-if="formData.transporte == 'Cruz del Sur' && formData.selected == 'E'">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for=""> Provincia</label>
                                                     <input type="text" class="form-control form text-capitalize" v-model="formData.provincia" readonly>
                                               </div>
                                           </div>
                                             <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for=""> Ciudad:</label>
                                                    <input type="text" class="form-control form text-capitalize" v-model="formData.ciudad" readonly>
                                               </div>
                                           </div>
                                            <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for=""> Domicilio:</label>
                                                     <input type="text" class="form-control form text-capitalize" v-model="formData.domicilio" readonly>
                                               </div>
                                           </div>
                                            <div class="col-md-3">
                                               <div class="form-group">
                                                   <label for="">N°:</label>
                                                     <input type="text" class="form-control form text-capitalize" v-model="formData.numero" readonly>
                                               </div>
                                           </div>
                                            <div class="col-md-3">
                                               <div class="form-group">
                                                   <label for=""> CP:</label>
                                                     <input type="text" class="form-control form text-capitalize" v-model="formData.codigo" readonly>
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
                                    <h3 class="text-center text-uppercase color-verde">Tu pedido <router-link to="/carrito" class="float-right btn btn-info btn-sm" style="text-transform: none"><i class="fas fa-arrow-left"></i> Volver al carrito</router-link></h3>
                                </div>
                                <div class="card-body fondo-verde text-dark">
                                    <ul class="list-group" v-if="products">
                                        <li class="list-group-item lista">
                                            <h5 class="text-uppercase">Productos</h5>                               
                                        </li>
                                        <li class="list-group-item lista">
                                            <p class=" text-dark" v-for="product in products" :key="product.id">  
                                            <span v-if="product[0].precio != '0'"><i class="fas fa-check-circle text-white"></i> {{product[0].titulo}}</span>
                                            <span class="float-right" v-if="product[0].precio != '0'">{{product.quantity}}<b class="text-white ml-1 mr-1">x</b>${{product[0].precio}}</span>
                                            </p>          
                                        </li>
                                        <li class="list-group-item lista">
                                            <h5 class="text-uppercase">Subtotal <b class="float-right text-white">${{getTotal()}}</b></h5>
                                        </li>
                                         <li class="list-group-item lista" v-if="formData.picked == 'transferencia'">
                                            <p class="text-uppercase">Descuento 20%: <b class="float-right text-white">-${{descuento}}</b></p>
                                        </li>
                                        <li class="list-group-item lista">
                                             <template v-for="items in cotizacion" :key="items">
                                                <p class="text-uppercase" v-if="items.TipoDeEntrega == formData.selected">Envio: <b class="float-right text-white">${{Intl.NumberFormat("de-DE", { maximumSignificantDigits: 3 }).format(items.Valor)}}</b></p>
                                             </template>
                                        </li>                           
                                        <li class="list-group-item lista ">
                                            <h4 v-if="envio" class="text-uppercase border-bottom border-top">Total <b class="float-right text-white">${{(parseFloat(getSumaTotal()) + parseFloat(envio)).toFixed(3)}}</b></h4>
                                            <h4 v-else class="text-uppercase border-bottom border-top">Total <b class="float-right text-white">${{getSumaTotal()}}</b></h4>
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
                                        <input type="radio" id="ahora12" value="ahora12" aria-label="radio for following text input" v-model="formData.picked">
                                        </div>
                                        <span class="ml-2">Ahora 12 <img src="/img/ahora-12.jpg" class="p-1" width="70px"  /></span>
                                    </div>
                                    </div>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                        <input type="radio" id="ahora18" value="ahora18" aria-label="radio for following text input" v-model="formData.picked">
                                        </div>
                                        <span class="ml-2">Ahora 18 <img src="/img/ahora-18.png" class="p-1" width="75px" /></span>
                                    </div>
                                    </div>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                        <input type="radio" id="transferencia" value="transferencia" aria-label="radio for following text input" v-model="formData.picked" >
                                        </div>
                                        <span class="ml-2">Transferencia Bancaria (20% de descuento)</span>
                                    </div>
                                    </div>
                                </li>
                                <li class="list-group-item p-0">
                                    <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                        <input type="radio"  id="mercado"  value="mercado" aria-label="radio for following text input" v-model="formData.picked">
                                        </div>
                                        <span class="ml-2">Tarjeta crédito/débito  <img src="/img/mercado.png" class="p-1" width="50px" /></span>
                                    </div>
                                   
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <button class="btn btn-secondary btn-block text-uppercase" id="btnT" v-if="formData.picked == 'transferencia'"><i class="fas fa-cart-plus"></i> Finalizar Compra</button>
                                    <button class="btn btn-secondary btn-block text-uppercase" id="btnA" v-else-if="formData.picked == 'ahora12'"><i class="fas fa-cart-plus"></i> Continuar Compra</button>
                                      <button class="btn btn-secondary btn-block text-uppercase" id="btnA" v-else-if="formData.picked == 'ahora18'"><i class="fas fa-cart-plus"></i> Continuar Compra</button>
                                    <button  class="btn btn-secondary btn-block text-uppercase" @click="mercadoPago"  id="btnM" v-else-if="formData.picked == 'mercado'">
                                       <i class="fas fa-cart-plus"></i> Continuar Compra
                                    </button>
                                </li>   

                            </ul>
                         <!-- <div class="tokenizer-container"></div>
       -->
                        </div>
                    </div>
                </div>
            </div>
      </form>

     <!-- <button type="button" class="btn btn-primary" @click="loginAndreani">Login</button> -->
  

    
</template>

<script>
import {onMounted, ref, watchEffect} from 'vue';
import {useRouter} from 'vue-router';
import * as Yup from 'yup';
import axios from 'axios';
import $ from 'jquery';
import {getEnvio} from '../../api/envios';
import {useToast} from 'vue-toastification';
import {createOrderApi} from '../../api/order';
import {createPreference} from '../../api/mercado-pago';
import {loginA} from '../../api/andreani';

export default {
props:{
      products: Array
  },
  data(){
      return{
          destinos:[],
          destinosA: [],
          idcliente: '7098d9f8-de4c-4d27-9e93-60823a16d405',
          ulogin: 'ecommerce_test_api',
          uclave: 'api_test_ecommerce',
          idSucursalOrigen: '365',
          host: 'api-test',
          provincias: [],
          provinciasA: [],

      }
  },
  methods:{
    mercado(){
        if(this.formData.nombre && this.formData.apellido && this.formData.transporte && this.formData.dni && this.formData.email && this.formData.ciudad && this.formData.codigo){         
            window.$('#myModal').modal('toggle')
        }
    }
  },
  mounted(){
      axios.get('http://'+this.host+'.cruzdelsur.com/api/ListaDeSucursalesDestino?idcliente='+this.idcliente+'&ulogin='+this.ulogin+'&uclave='+this.uclave+'&idSucursalOrigen='+this.idSucursalOrigen)
      .then(response => {
          this.destinos = response.data.Sucursales;

           var unique = this.destinos.map(item => item.Provincia)
                .filter((value, index, self) => self.indexOf(value) === index)
                
           this.provincias = unique;

      });

      axios.get('https://apis.andreani.com/v2/sucursales')
      .then(response => {
          this.destinosA = response.data;

            // var uniqueB = destinosA.map(item => item.datosAdicionales.tipo)
            //     .filter((value, index, self) => self.indexOf(value) === index)
                
            //   this.destinosA = uniqueB;

           var uniqueA = this.destinosA.map(item => item.direccion.provincia)
                .filter((value, index, self) => self.indexOf(value) === index)
                
              this.provinciasA = uniqueA;


      });

  },
setup(props){
    const toast = useToast();
     let formData = ref({});
     let formError = ref({});
     let descuento = ref();
     let envio = ref(0);
     let cotizacion = ref([]);
     const router = useRouter();


        const schemaForm = Yup.object().shape({
            nombre: Yup.string().required(true),
            apellido: Yup.string().required(true),
            dni: Yup.string().required(true),
            tel: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            domicilio: Yup.string().required(true),
            numero: Yup.string().required(true),
            provincia: Yup.string().required(true),
            ciudad: Yup.string().required(true),
            codigo: Yup.string().required(true),
        });

   
      
       const getProductos = () => {
         let productos =  props.products;

         let items = [];


          if(productos === null){
              console.log('No hay productos')
          }else{

         productos.forEach((product) => {
             var titulo = product[0].titulo;
             var precio = product[0].precio;
             var cantidad = product.quantity;
             var alto = product[0].alto;
             var ancho = product[0].ancho;
            items.push({titulo, precio, cantidad, alto, ancho});
          });

          return{
              items,
          }

          }
      }

      const loginAndreani = async () =>{
          var login = await loginA();

          console.log(login);
      }


      const getMedidas = () => {

          let obtener = getProductos();

          let alto = 0;
          let ancho = 0;

        obtener.items.forEach(element => {
            var cantidad = element.cantidad;
            var altura = element.alto;
            var anchura = element.ancho;
             alto += parseInt(altura) * cantidad; 
             ancho += parseInt(anchura) * cantidad;
        });


        return {
            alto,
            ancho
        }

     

      }


       const getTotal = () => {
         let precios =  props.products;

          let totalTemp = 0;


          if(precios === null){
              console.log('No hay productos')
          }else{

         precios.forEach((product) => {

          let precio = product[0].precio.replace(/[$.]/g, ''); 
           totalTemp += parseInt(precio) * product.quantity;
           });
           
          return new Intl.NumberFormat("de-DE").format(totalTemp);

          }
       

      }



      watchEffect(async () => {


          if(formData.value.localidad || formData.value.cp){
              
              var alto = getMedidas().alto;
              var ancho = getMedidas().ancho;
              var localidad = formData.value.localidad;
              var cp = formData.value.cp;
              var costo = getTotal();

          }else{
               var alto = getMedidas().alto;
               var ancho = getMedidas().ancho;
                var localidad = formData.value.ciudad;
                var cp = formData.value.codigo;
                var costo = getTotal();
          }

          const response = await getEnvio(localidad, cp, costo, alto, ancho);
          console.log(response);
          cotizacion.value = response.Cotizaciones;
          const valores = response.Cotizaciones;

          valores.forEach((items) => {   

              if(items.TipoDeEntrega === selected.value && !undefined){
                  const valor = items.Valor;
                  envio.value = Intl.NumberFormat("de-DE",  { maximumSignificantDigits: 3 }).format(valor);
              }

          });

          
      });



      const mercadoPago = async () =>{

      if(!formData.value.nombre || !formData.value.apellido || !formData.value.email || !formData.value.provincia || !formData.value.dni || !formData.value.codigo || !formData.value.transporte || !formData.value.selected){
          console.log('Falta de datos');
          
      }else{
          let obtener = getProductos();

          let productos = {
              "items":[
                  {
                      "title": "Envio",
                      "unit_price": envio.value,
                      "quantity": 1
                  }

              ],
              "back_urls":{
                  "success": "http://localhost:8080/comprobante"
              },
              "auto_return": "approved",
          }

         obtener.items.forEach(element => {
           
             var title = element.titulo;
            var description = "Dummy description";
            var picture_url = "http://www.myapp.com/myimage.jpg";
            var quantity = element.cantidad;
            var category_id =  "Colchones";
            var currency_id = "$";
            var precio = element.precio;
            var precio2 = precio.replace(/[$.]/g, '');
            var unit_price = parseInt(precio2) ;
            
            productos.items.push({"title": title,"description": description, "picture_url": picture_url,"category_id": category_id,"currency_id": currency_id,"unit_price": unit_price, "quantity": quantity})
        })

            const response = await createPreference(productos);

            // window.open(response.sandbox_init_point , "Mercado-pago" , "width=900,height=500,scrollbars=NO")

           window.location = `${response.sandbox_init_point}` ;

      }
          
      }



      const getSumaTotal =  () => {
          
          var p = new  String(getTotal());
          var precio = p.replace(/[$.]/g, '');
          var suma = parseInt(precio);


          if(formData.value.picked == 'transferencia'){
         
          var porcentaje = (suma*20)/100;
          descuento.value = Intl.NumberFormat("de-DE").format(porcentaje);
          var total = suma - porcentaje;

          return new Intl.NumberFormat("de-DE").format(total);

          }else{

              return new Intl.NumberFormat("de-DE").format(suma);
          }

      }




      const createOrder = async () => {

           formError.value = {};

            
            let domicilio = {

                transporte: formData.value.transporte,
                sucursal: formData.value.selected,
                cp: formData.value.codigo,
                costo: envio.value,
            }

            let sucursal = {
                transporte: formData.value.transporte,
                sucursal: formData.value.selected,
                cp: formData.value.cp,
                costo: envio.value,
            }

            
            if(formData.value.picked == 'transferencia'){

                var pago = 'transferencia';

            }else if(formData.value.picked == 'ahora12'){

                var pago = 'Ahora 12';
            }else if(formData.value.picked == 'ahora18'){
                var pago = 'Ahora 18';
            }else if(formData.value.picked == 'mercado'){
                var pago = 'Mercado Pago';
            }else{
                console.log('No hay métodos de pago seleccionado');
            }

            
            const data = {
                nombre: formData.value.nombre,
                apellido: formData.value.apellido,
                dni: formData.value.dni,
                tel: formData.value.tel,
                email: formData.value.email,
                domicilio: formData.value.domicilio,
                numero: formData.value.numero,
                pais: "Argentina",
                provincia: formData.value.provincia,
                localidad: formData.value.ciudad,
                codigo: formData.value.codigo,      
                envios: domicilio,
                productos: getProductos().items,
                total : getSumaTotal() + envio.value,
                metodo: pago,
            }


             const data2 = {
                nombre: formData.value.nombre,
                apellido: formData.value.apellido,
                dni: formData.value.dni,
                tel: formData.value.tel,
                email: formData.value.email,
                domicilio: formData.value.domicilio,
                numero: formData.value.numero,
                pais: "Argentina",
                provincia: formData.value.provincia,
                ciudad: formData.value.ciudad,
                codigo: formData.value.codigo,      
                envios: sucursal,
                productos: getProductos(),
                total : getSumaTotal() + envio.value,
                metodo: pago,
            }




          try {

                await schemaForm.validate(formData.value, {abortEarly: false});


                    try {

                        
                        if(formData.value.picked == 'transferencia'){
                            if(formData.value.cp){

                                console.log(data2);
                                alert('Felicitaciones pago con transferencia');

                                
                            }else{                 

                                //  const response = await createOrderApi(data);

                                console.log(data);

                                  toast("Al no realizar la transferencia y no adjuntar el comprobante durante los proximos 24hs , se cancela la compra.", {
                                  timeout: 10000,
                                  position: 'top-center',
                                  closeButton : false,
                                  });
                                  toast.success("¡Muchas Gracias por tu compra! Se envió a tu email, el CBU de Neorelax para realizar la transferencia y adjuntar el comprobante.", {
                                  timeout: 10000,
                                  position: 'top-center',
                                  closeButton : false,
                                  icon: 'fas fa-shopping-cart' 
                                  });
                              

                                router.push("/");

                            }
                        }else if(formData.value.picked == 'ahora12'){
                            console.log(data);
                            alert('Ahora 12');
                        }else if(formData.value.picked == 'ahora18'){
                              console.log(data);
                               alert('Ahora 18');
                        }else if(formData.value.picked == 'mercado'){
                                          

                         localStorage.setItem("info", JSON.stringify(data));
                          
                                
                        }
            


                    } catch (error) {
                        console.log(error);
                    }
              
          } catch (error) {
                error.inner.forEach((err) => {
                       formError.value[err.path] = err.message;
                   });


                    toast.warning("¡Debes ingresar todos los campos requeridos!", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
                  
          }

        
      }


      return{
          getTotal,
          formData,
          createOrder,
          getProductos,
          getSumaTotal,
          envio,
          formError,
          cotizacion,
          descuento,
          toast,
          getMedidas,
          mercadoPago,
          loginAndreani
        
      }
}
}
</script>

<style scoped>
.form{
    border: 2px solid #aaa;
}

.form:focus{
    border: 2px solid #888;
}

li .lista{
    border: 2px solid #aaa !important;
}

.input-group-text{
    background: none !important;
    border: none !important;
}

input.error{
    border: 2px solid #faa !important;
    background-color: #ffeded !important;

}

select.error{
    border: 2px solid #faa !important;
    background-color: #ffeded !important;

}



</style>