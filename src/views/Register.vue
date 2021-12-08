<template>
    <BasicLayout>
        <div class="row p-3">
            <div class="col-md-5 mx-auto p-5">
                <div class="card" style="box-shadow: 3px 0px 4px 3px #888">
                    <div class="card-header">
                        <h3 class="color-verde text-uppercase">Registro</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control input-login" v-model="formData.nombre" :class="{error: formError.nombre}" placeholder="Nombre completo" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" class="form-control input-login" v-model="formData.email" :class="{error: formError.email}" placeholder="Correo eléctronico" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control input-login" v-model="formData.password" :class="{error: formError.password}" placeholder="Contraseña" aria-label="Username2" aria-describedby="basic-addon2">
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-secondary btn-sm btn-block" @click="guardar">
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                         <div class="row mt-2 mb-2">
                              <div class="col-md-4">
                                 <router-link to="/" class="mx-left text-secondary text-center p-2 mt-2"><i class="fas fa-arrow-left"></i> Volver</router-link>
                              </div>
                              <div class="col-md-8">

                                    <span class=" p-2 mt-2">
                                        ¿Ya tienes cuenta?
                                        <router-link to="/login" class=" text-center color-verde">Iniciar sesión</router-link>
                                    </span>
                              </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </BasicLayout>
</template>

<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import * as Yup from 'yup';
import BasicLayout from '../layouts/BasicLayout';
import {registerApi} from '../api/user';
import { getCurrentInstance } from 'vue';


export default {
    name: 'Register',
    components:{
        BasicLayout
    },
    methods:{
          guardar(){
              if(this.formData.nombre && this.formData.email && this.formData.password){
                    this.$toast.success(`¡Te has registrado correctamente!`);  
                   
              }else if(!this.formData.nombre || !this.formData.email || !this.formData.password ){
                   this.$toast.warning(`¡Debes completar todos los campos!`);  
                               
              }else{
                  this.$toast.error(`¡Error! Intente nuevamente`);  
                 
              }
              setTimeout($toast.clear, 4000);
          }
       
    },
    setup(){
        let formData = ref({});
        let formError = ref({});
        const router = useRouter();
        const $toast = getCurrentInstance().ctx.$toast;
      
        const schemaForm = Yup.object().shape({
            nombre: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true)
        })

        const register = async () => {
            formError.value = {};
   
              try {
                    await schemaForm.validate(formData.value, {abortEarly: false});
                    try {
                        const response = await registerApi(formData.value);
                          $toast.success(`¡Te has registrado correctamente!`);  
                            setTimeout($toast.clear, 4000); 
                        router.push("/login");
                    } catch (error) {
                        console.log(error);
                    }
                } catch (error) {
                   error.inner.forEach((err) => {
                       formError.value[err.path] = err.message;
                   });
                   $toast.warning(`¡Debes completar todos los campos!`);
                }

        }

      
        return{
            formData,
            register,
            formError,
        }
    },
}
</script>

<style>
.input-group input{
    border: 1px solid #aaa !important;
    border-radius: none;
}

input.error{
     border: 2px solid #faa;
    background-color: #ffeded ;

}

a:hover{
    text-decoration: none !important;
    color: #888;
}
</style>