<template>
   <div class="col-md-6 p-1 mt-3">
        <div class="col-md-12">
                 <h4><b>Escríbenos tus inquietudes</b></h4>
        </div>
        <div class="col-md-12">
            <div class="card fondo-verde">
            <div class="card-body">
                    <form  @submit.prevent="contact">       
                <div class="row" style="font-weight: bold">   
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text"  class="form-control" placeholder="Nombre" name="nombre" v-model="formData.nombre" :class="{error: formError.nombre}">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text"  class="form-control" placeholder="Email" name="email"  v-model="formData.email" :class="{error: formError.email}">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text"  class="form-control" placeholder="Teléfono" name="tel"  v-model="formData.tel" :class="{error: formError.tel}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label class="text-white">Consulta</label>
                            <textarea  class="form-control"  rows="5"  v-model="formData.mensaje" name="mensaje" :class="{error: formError.mensaje}"></textarea>
                        </div>
                        <div class="col-md-12 mt-3">
                            <button  style="font-weight: bold;" class="btn btn-block btn-secondary text-white">Enviar</button>
                        </div>
                </div>
                    </form> 
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import {ref} from 'vue';
import * as Yup from 'yup';
import {contactoApi} from '../../api/contacto';
import emailjs from 'emailjs-com';
import {useToast} from 'vue-toastification';

export default {
     name: 'Form',
    data(){
        return{
        }
    },
    methods:{     
},
setup(){
        let formData = ref({});
        let formError = ref({});
        const toast = useToast();

           const schemaFormContact = Yup.object().shape({
            nombre: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            tel: Yup.string().required(true),
            mensaje: Yup.string().required(true),
        });

        const contact = async (e) => {
            formError.value = {};

            try {
                   await schemaFormContact.validate(formData.value, {abortEarly: false});

                   try {
                        const response = await contactoApi(formData.value);
                         emailjs.sendForm('service_551fpe9', 'template_3meea58', e.target, 'user_UnxcYapQ5Qa9DhMB1oElD',{
                             nombre: formData.value.nombre,
                             email: formData.value.email,
                             tel: formData.value.tel,
                             mensaje: formData.value.mensaje
                         })
                            .then((result) => {
                                console.log('SUCCESS!', result.status, result.text);
                                
                            }, (error) => {
                                console.log('FAILED...', error);
                            });

                             var templateParams = {
                                 nombre: formData.value.nombre,
                                email: formData.value.email,
                            };

                         emailjs.send('service_oj3lrv9','template_dlyqbrh', templateParams, 'user_qpNrTxe9wFPudKd45Fy5o')
                            .then((result) => {
                                console.log('SUCCESS!', result.status, result.text);
                                
                            }, (error) => {
                                console.log('FAILED...', error);
                            });        


                              toast.success("¡Se ha enviado el mensaje!Estaremos en contacto.", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
                   
                       
                   } catch (error) {
                       console.log(error);
                   }
            } catch (error) {
                 error.inner.forEach((err) => {
                       formError.value[err.path] = err.message;
                   });

                   toast.warning("¡Complete todos los campos requeridos!", {
                                  timeout: 3000,
                                  position: 'top-center'
                                  });
            
            }

            if(formData.value.nombre && formData.value.email && formData.value.tel && formData.value.mensaje){
                formData.value.nombre = "";
                formData.value.email = "";
                formData.value.tel = "";
                formData.value.mensaje = "";
            }
        }
           return{
            formData,
            contact,
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
textarea.error{
    border: 2px solid #faa;
    background-color: #ffeded ;

}

</style>