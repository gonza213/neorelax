import { API_URL } from '../utils/constants';

export async function suscriptorApi(formData) {
    try {
        const url = `${API_URL}/api/suscriptor/nuevo`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


