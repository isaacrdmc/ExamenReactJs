



export default async function ObtenerDatos() {
    // const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11008"

    //   realizamos la petición
    let responseData = await fetch(url);

    //   ? Esperasmo la respuesta:
    let dataObtenida = await responseData.jsxon();

    // ? Extraemos el objeto que se halla dentro del JSON de la respuesta:
    let datosApi = dataObtenida.drinks[0];

    // ? Desestructuramos el objeto del arreglo generado:
    const {
        strDrink,       // Nombre
        strCategory,        // Descripcion
        strDrinkThumb,      // Imágen
    } = datosApi;


    // ^ Ahora retornamos los datos:
    return {
        nombre: strDrink,
        descript: strCategory,
        img: strDrinkThumb
    }
};


