import { API_URL } from '../utils/constants';

export async function transferenciaApi(form) {
    try {
        const url = `${API_URL}/api/transferencia`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


