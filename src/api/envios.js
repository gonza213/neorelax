import {HOST, ULOGIN, UCLAVE, IDCLIENTE} from '../utils/constants';

export async function getEnvio(localidad, cp, costo, alto, ancho, peso, largo){
    try {
        // const response = await fetch(`${HOST}/NuevaCotXVol?idcliente=${IDCLIENTE}&ulogin=${ULOGIN}&uclave=${UCLAVE}&idSucursalOrigen=${IDSUCURSAL}&ancho=50&largo=150&alto=150&peso=125&codigopostal=9400&localidad=Rio Gallegos&valor=1000&contrareembolso`);
        const response = await fetch(`${HOST}/NuevaCotXMed?idcliente=${IDCLIENTE}&ulogin=${ULOGIN}&uclave=${UCLAVE}&ancho=${ancho}&largo=${largo}&alto=${alto}&peso=${peso}&codigopostal=${cp}&localidad=${localidad}&valor=${costo}&contrareembolso`)
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}