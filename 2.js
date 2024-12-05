let api = {
    obtenerPokemones: function(limite) {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}`;
        return fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => datos.results)
            .catch(error => {
                console.error("Error al obtener los Pokémon:", error);
                return [];
            });
    },

    obtenerDetalles: function(url) {
        return fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => datos)
            .catch(error => {
                console.error("Error al obtener detalles del Pokémon:", error);
                return {};
            });
    }
};