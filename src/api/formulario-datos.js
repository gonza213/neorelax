

export async function subirFormulario(datos, items, total){

    localStorage.setItem('Datos', JSON.stringify(datos));
    localStorage.setItem('Items', JSON.stringify(items));
    localStorage.setItem('XStl', JSON.stringify(total));

}