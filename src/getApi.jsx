



export default async function ObtenerDatos(buscar, setPokemon) {

    try {
        // llamamos a la ffuncion
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscar.toLowerCase()}`);

        //   Analizamos la esrpuesa:
        if (!res.ok) throw new Error("No encontrado");

        //   Guradmos el dato
        const data = await res.json();

        //   enviamos el dato:
        setPokemon(data);
    } catch (err) {
        console.log(err);
        setPokemon(null);
        alert("Pokémon no encontrado");
    }


    // // const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    // const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11008"

    // //   realizamos la petición
    // let responseData = await fetch(url);

    // //   ? Esperasmo la respuesta:
    // let dataObtenida = await responseData.jsxon();

    // // ? Extraemos el objeto que se halla dentro del JSON de la respuesta:
    // let datosApi = dataObtenida.drinks[0];

    // // ? Desestructuramos el objeto del arreglo generado:
    // const {
    //     strDrink,       // Nombre
    //     strCategory,        // Descripcion
    //     strDrinkThumb,      // Imágen
    // } = datosApi;


    // // ^ Ahora retornamos los datos:
    // return {
    //     nombre: strDrink,
    //     descript: strCategory,
    //     img: strDrinkThumb
    // }
};


