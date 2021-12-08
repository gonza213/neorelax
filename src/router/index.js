import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Porque from '../views/Porque.vue';
import Contacto from '../views/Contacto.vue';
import Productos from '../views/Productos.vue';
import Almohadas from '../views/Almohadas.vue';
import Colchones from '../views/Colchones.vue';
import Conjuntos from '../views/Conjuntos.vue';
import Cuellos from '../views/Cuellos.vue';
import Item from '../views/Item.vue';
import Carrito from '../views/Carrito.vue';
import Formulario from '../views/Formulario.vue';
import Envio from '../views/Envio.vue';
import Transferencia from '../views/Transferencia.vue';
import NotFound from '../views/NoDefault.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/quienes-somos',
    name: 'About',
    component: About
  },
  {
    path: '/porque-elegirnos',
    name: 'Porque',
    component: Porque
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/almohadas',
    name: 'Almohadas',
    component: Almohadas
  },
  {
    path: '/colchones',
    name: 'Colchones',
    component: Colchones
  },
  {
    path: '/conjuntos',
    name: 'Conjuntos',
    component: Conjuntos
  },
  {
    path: '/cuello-musical',
    name: 'Cuellos',
    component: Cuellos
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/formulario-datos-personales',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/envio-metodo-pago',
    name: 'Envio',
    component: Envio
  },
  {
    path: '/finalizar-transferencia',
    name: 'Transferencia',
    component: Transferencia
  },
  {
  path: '/item/:id',
  name: 'Item',
  component: Item
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
