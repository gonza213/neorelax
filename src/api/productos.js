import {API_URL} from '../utils/constants';

export async function getColchones(){
    try {
        const response = await fetch(`${API_URL}/api/productos/colchones`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAlmohadas(){
    try {
        const response = await fetch(`${API_URL}/api/productos/almohadas`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getSommiers(){
    try {
        const response = await fetch(`${API_URL}/api/productos/sommiers`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getCuellos(){
    try {
        const response = await fetch(`${API_URL}/api/productos/cuellos`);
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getItem(id){
    try {
        const response = await fetch(`${API_URL}/api/producto/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}