<template>
<footer style="background: #000">
   <div class="col-md-12 p-5">
       <div class="row">
           <div class="col-md-3">
           <ul class="list-group list-group-flush">
                <li class="list-group-item text-secondary">Secciones</li>
                <li class="list-group-item"><router-link to="/">Home</router-link></li>
                <li class="list-group-item"><router-link to="/quienes-somos">Quiénes Somos</router-link></li>
                <li class="list-group-item"><router-link to="/porque-elegirnos">Porque elegirnos</router-link></li>
                <li class="list-group-item"><router-link to="/productos">Productos</router-link></li>
                <li class="list-group-item"><router-link to="/contacto">Contacto</router-link></li>
            </ul>
            </div>
            <div class="col-md-3">
                <ul class="list-group list-group-flush">
                        <li class="list-group-item text-secondary">Ayuda</li>
                        <li class="list-group-item"><a class="p-1 fondo-verde">Preguntas frecuentes</a></li>
                        <li class="list-group-item"><a href="#"  data-toggle="modal" data-target="#exampleModal">¿Cómo elijo mi colchón?</a></li>
                        <li class="list-group-item"><a href="#" data-toggle="modal" data-target="#exampleModal2">¿Qué medios de envío hay?</a></li>
                        <li class="list-group-item"><a href="#" data-toggle="modal" data-target="#exampleModal3">¿Cómo se puede pagar?</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="list-group list-group-flush">
                        <li class="list-group-item text-secondary">Recibir novedades</li>
                        <li class="list-group-item"><span class="text-white">Dejanos tu e-mail</span></li>
                        <li class="list-group-item" >
                            <form @submit.prevent="suscripcion">
                                <div class="form-group">
                                    <input type="email" class="form-control"  placeholder="Correo electrónico" v-model="formData.email" :class="{error: formError.email}">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-secondary btn-block btn-sm">Enviar</button>
                                </div>
                            </form>
                        </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="list-group list-group-flush">
                        <li class="list-group-item text-secondary">Seguinos</li>
                        <li class="list-group-item">
                            <a href="https://es-la.facebook.com/neorelaxcolchones/" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/neorelaxcolchones/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                             <a href="https://wa.link/tk4nb1" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </li>
                        <!-- <li class="list-group-item ocultar">
                           <p class="text-left text-uppercase text-secondary">QUIERO EXTENDER EL PLAZO DE GARANTÍA DE MI PRODUCTO</p>
                        </li> -->
                         <li class="list-group-item">
                           <p class="text-left text-white"><b>Contáctenos</b><br>
                           +54 11 2062 0447<br>
                           +54 11 2114-4776<br>
                           <span class="p-1 fondo-verde">Lunes a viernes 9 a 20hs</span>
                           </p>
                        </li>
                </ul>
            </div>
            <div class="col-md-3">
                <span class="text-secondary text-left"><b>&copy; 2021 NeoRelax.<br>Todos los Derechos Reservados</b></span>
            </div>
            <div class="col-md-3 ocultar">
                <div class="float-right">
                   <img src="/img/logo2.png"  width="200px" alt="">
                </div>
            </div>
              <div class="col-md-3 ocultar">
                <div class="float-left">
                 <img src="/img/logo_lecos_blanco.png" width="120px"  alt="">
                </div>
            </div>
            <div class="col-md-3 float-right creador ocultar">
                <span class="text-secondary"><b class="text-right float-right">Desarrollado por:<br> <a href="#" class="p-1 text-white" target="_blank">Marketing Virtual-Web</a></b></span>
            </div>
       </div>
   </div>
</footer>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">¿Cómo elijo mi colchón?</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="card m-2">
              <div class="card-header fondo-verde text-white"><h4>Colchón</h4></div>
              <div class="card-body">
                    <p>
            Dormir sobre un buen colchón es indispensable para tener un buen descanso y por consiguiente, una buena salud. Dormir bien ayuda al sistema inmunitario, al sistema nervioso, mejora la circulación sanguínea, ayuda al aparato locomotor, al corazón, al cerebro, al metabolismo, a los ojos y a la piel. Si por las mañanas te duelen los músculos o los notas tensos es que necesitas cambiar de colchón. <br>
            Un colchón adecuado evitará que padezcamos lumbalgias, contracturas y malas posturas al dormir. <br>
            El mejor colchón para la espalda debe tener una <strong class="color-verde">firmeza media y una durabilidad alta</strong> , es decir, que mantenga sus prestaciones inalterables en períodos largos de tiempo. <br>
            Homogéneo. No debe tener hundimientos ni huecos. <br>
            Adaptable a nuestro cuerpo y debe respetar la curvatura natural de la columna.<br>
            Un sueño sin interrupciones es importantísimo para despertarse completamente renovado a la mañana siguiente.
        </p>
              </div>
          </div>
          
          <div class="card m-2">
              <div class="card-header fondo-verde text-white"><h4>Peso y Densidad:</h4></div>
              <div class="card-body">
                    <p>
                        Cuanto más denso es el colchón, más resistencia tiene al peso y a la deformación. <br>

                        Los médicos suelen recomendar colchones de alta densidad ya que los mismos se adaptan a la forma del cuerpo, logrando así una buena postura. <br>

                        Nuestros colchones Neorelax, soportan <strong class="color-verde">cualquier peso</strong>.
                    </p>
              </div>
          </div>

           <div class="card m-2">
              <div class="card-header fondo-verde text-white"><h4> Sommier: Elige una base con buena estructura</h4></div>
              <div class="card-body">
                    <p>
                        Debes prestar atención al somier del colchón, ya que éste debe ser firme y parejo, proporcionando estabilidad al colchón. <br>

                        No debes comprar un colchón nuevo y colocarlo sobre un sommier hundido, pues también se deformará y ya no será el mejor colchón para tu cuerpo. <br>

                        Las bases con mdf son muy recomendados, por su firmeza y la estabilidad que proporcionan al colchón.
                    </p>
              </div>
          </div>
           <div class="card m-2">
              <div class="card-header fondo-verde text-white"><h4>Medida: Si duermes en pareja, es recomendable elegir un colchón de mayor tamaño.</h4></div>
              <div class="card-body">
                    <p>
                        Necesitas comodidad para descansar correctamente y al dormir en pareja te moverás varias veces durante el sueño. <br>

                        Si es para una persona, procure que tenga como mínimo un metro de ancho.
                    </p>
              </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">¿Qué medios de envíos hay?</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="card m-2">
              <div class="card-body">
                 <p>Los envíos son sin cargo dentro de Buenos Aires y Gran Buenos Aires, para los envíos al interior del país nos manejamos con empresas de mensajería o expresos de confianza.</p>
              </div>
          </div>
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">¿Cómo se puede pagar?</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="card m-2">
              <div class="card-body">
                 <p>Se puede pagar con las opciones Ahora12 y Ahora18 con tarjetas Visa o MasterCard, una vez que completes la información solicitada un vendedor se comunicara con vos para terminar de cerrar la operación. <br>

También se puede pagar vía transferencia bancaria o utilizando las alternativas de pago que ofrece mercado pago.</p>
              </div>
          </div>
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import {ref} from 'vue';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import {suscriptorApi} from '../api/suscriptor';
import {useToast} from 'vue-toastification'

  export default{
      name: 'Footer',
      data(){
          return{

          }
      },
      methods:{
          // email(){
              
          //     if(this.validEmail(this.formData.email)){
          //           console.log(this.formData.email);
          //         axios.defaults.headers.post['Content-Type'] = 'application/json';
          //         axios.post('https://formsubmit.co/ajax/'+this.formData.email, {
          //             name: "Neorelax",
          //             message: "Te has suscripto con exito, recibirás todas nuestras novedades de los productos que ofrecemos",
          //             email: this.formData.email,
          //             _captcha: false,
          //             _subject: 'Suscripción con exito',
          //             _cc: 'gonzaa.vidal.19@gmail.com'
          //         })
          //             .then(response => console.log(response))
          //             .catch(error => console.log(error));
                   
          //     }else if(!this.formData.email){
          //          console.log('Ingrese email');
          //      }else if(!this.validEmail(this.formData.email)){
                   
          //          console.log('ingrese email valido');
          //     }else{
                 
                 
          //     }
              
              
          // },
          // validEmail(email) {
          //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //   return re.test(email);
          //   }
      },
      setup(){
          const toast = useToast();
          let formData = ref({});
          let formError = ref({});


          const schemaFormSusc = Yup.object().shape({
              email: Yup.string().email(true).required(true)
          });

          const suscripcion = async () => {
              formError.value = {};

              try {
                 await schemaFormSusc.validate(formData.value, {abortEarly: false});
                 try {
                        const response = await suscriptorApi(formData.value); 
                        var templateParams = {
                            email: formData.value.email,
                        };

                         emailjs.send('service_oj3lrv9','template_dljaa25', templateParams, 'user_qpNrTxe9wFPudKd45Fy5o')
                            .then((result) => {
                                console.log('SUCCESS!', result.status, result.text);
                                
                            }, (error) => {
                                console.log('FAILED...', error);
                            });        



                    toast.success("¡Te has suscripto correctamente!", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
                 } catch (error) {
                     console.log(error);
                      toast.error("¡Error al suscribirse!", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
                 }
              } catch (error) {
                   error.inner.forEach((err) => {
                       formError.value[err.path] = err.message;
                   })
                   toast.warning("¡Debes un ingresar un email!", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
                  
                   
              }

              if(formData.value.email){
                  formData.value.email = "";
              }
              
          }



          return {
              formData,
              suscripcion,
              formError,
              toast
          }

      }
  }

</script>

<style>
input.error{
    border: 2px solid #faa;
    background-color: #ffeded ;

}

</style>