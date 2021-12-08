const {API_MERCADO, ACCESS_TOKEN} = require('../utils/constants');

export async function createPreference(productos){

    try {
        const url = `${API_MERCADO}/checkout/preferences?access_token=${ACCESS_TOKEN}`;
        const params = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productos),
        };
        const response = await fetch(url, params);
        const result = await response.json();

   
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
