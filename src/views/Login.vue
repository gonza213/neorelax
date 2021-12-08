<template>
    <BasicLayout>
        <div class="row p-3">
            <div class="col-md-5 mx-auto p-5">
                <div class="card" style="box-shadow: 3px 0px 4px 3px #888">
                    <div class="card-header">
                        <h3 class="color-verde text-uppercase">Iniciar sesión</h3>
                    </div>
                    <div class="card-body">
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                            </div>
                            <input type="email" class="form-control input-login" placeholder="Correo eléctronico" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                         <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control input-login" placeholder="Contraseña" aria-label="Username2" aria-describedby="basic-addon2">
                        </div>
                         <div class="input-group mb-3">
                            <button class="btn btn-secondary btn-sm btn-block">
                                Ingresar
                            </button>
                        </div>
                         <div class="input-group mb-3 row">
                           <a href="#" class="mx-auto color-verde text-center mt-2">¿Olvidaste la contraseña?</a>
                        </div>
                        
                    </div>
                    <div class="card-footer">
                         <div class="row mt-2 mb-2">
                              <div class="col-md-4">
                                 <router-link to="/" class="mx-left text-secondary text-center p-2 mt-2"><i class="fas fa-arrow-left"></i> Volver</router-link>
                              </div>
                              <div class="col-md-8">

                                    <span class=" p-2 mt-2">
                                        ¿No tienes cuenta?
                                        <router-link to="/register" class=" text-center color-verde">Registrarse</router-link>
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
import BasicLayout from '../layouts/BasicLayout'

export default {
    name: 'Login',
    components:{
        BasicLayout
    }
}
</script>

<style>
.input-group input{
    border: 1px solid #aaa !important;
    border-radius: none;
}

a:hover{
    text-decoration: none !important;
    color: #888;
}
</style>