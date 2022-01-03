import {ref} from 'vue'
import axios from 'axios'


const useMercadoPago = (datos) => {

    let resp = ref({})

    axios.post(`https://api.mercadopago.com/checkout/preferences?public_key=TEST-2120202c-03df-4737-a266-adde38acab23&access_token=TEST-5415771435113542-051218-47ba16d5357e371d6d1aa827caacac9a-387850437`, datos)
    .then(response => {
        const ver = response.data
        resp.value = ver
    })

    return {
        resp
    }


}

export default useMercadoPago