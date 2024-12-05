let app = {
    cargarPokemones: function() {
        api.obtenerPokemones(10).then(pokemones => {
            let contenedor = document.getElementById('pokemon-container');

            pokemones.forEach(pokemon => {
                api.obtenerDetalles(pokemon.url).then(detalles => {
                    let tarjeta = document.createElement('div');
                    tarjeta.className = 'pokemon-card';

                    tarjeta.innerHTML = `
                        <h3>${detalles.name.charAt(0).toUpperCase() + detalles.name.slice(1)}</h3>
                        <img src="${detalles.sprites.front_default}" alt="${detalles.name}">
                        <p>Altura: ${detalles.height}</p>
                        <p>Peso: ${detalles.weight}</p>
                    `;

                    contenedor.appendChild(tarjeta);
                });
            });
        }).catch(error => {
            console.error("Error al cargar los Pokémon:", error);
        });
    }
};

document.addEventListener('DOMContentLoaded', app.cargarPokemones);