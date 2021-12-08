import { uniqBy, countBy} from 'lodash';
import {API_URL, PRODUCTS} from '../utils/constants';

export function addProductCartApi(idProduct){
    const products = gatCartApi();
    products.push(idProduct);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function gatCartApi(){
    const products = localStorage.getItem(PRODUCTS);


    if(!products) return [];

    return JSON.parse(products);

}

export async function getProductCartApi(){
    const idProducts = gatCartApi();

    

    if(idProducts.lenght === 0) return null;

  
    try {
        const products = [];

         for await (const idProduct of idProducts){
             const response = await fetch(`${API_URL}/api/producto/${idProduct}`);
            const result = await response.json();
            products.push(result);
         }

     
         const productsCount = countBy(products, (product) => {
             return product[0].titulo;
         })
      

        const combined = uniqBy(products, (product) => {
            const productTemp = product;
            productTemp.quantity = productsCount[product[0].titulo];
            return productTemp[0].titulo;
        });

        return combined;
        // console.log(combined);

     } catch (error) {
         console.log(error);
         return null;
     }
}


export function deleteProductCartApi(idProduct){
    const products = gatCartApi();

    const index = products.indexOf(idProduct);
    if(index > -1) products.splice(index, 1);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function deleteAllProductCartApi(idProduct){
    const products = gatCartApi();

    const index = products.indexOf(idProduct);

    if(index > -1){
        products.splice(index, 1);
        localStorage.setItem(PRODUCTS, JSON.stringify(products));
        deleteProductCartApi(idProduct);
    }
        

}



