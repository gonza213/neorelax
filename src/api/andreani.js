import {HOSTA} from '../utils/constants';

export async function loginA(){
    
    try {
        const url = `${HOSTA}/login`;
        const params = {
            headers:{
                "Authorization": "Basic aW5kbGVjb19nbGE6YTg4WE5MVlF6Nw==",
            },
            mode: 'cors'
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}