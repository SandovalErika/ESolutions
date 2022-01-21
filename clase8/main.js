// deben lograr hacer que en la página se muestre el listado de películas y (en lugar de las URL de los personajes) el listado de personaje (actor) de cada película.

// Deben generar fetch en paralelo y cando se hayan cargado los nombres, cargar la película y luego ir a la siguiente. En caso de que ocurriese un error en alguno de los fetch deben "solucionarlo" de alguna forma, pero la película y el "listado de personajes" no se debe dejar de mostrar. Por otro lado, si el personaje ya existe, no se debe volver a pedir en un fetch para la siguiente película, sino extraerlo de un Set o arrary.

let loadJson = async () => {
  return fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const list = document.querySelector("ul");
      for (let i = 0; i < json.results.length; i++) {
        const movie = document.createElement("li");
        movie.innerHTML = `<h3>${json.results[i].title}</h3>`;

        movie.innerHTML += `<p>Episodio: ${json.results[i].episode_id}</p>`;
        movie.innerHTML += `<p>${json.results[i].opening_crawl}</p>`;
        let castList = "<ul>";
        json.results[i].characters.forEach((character) => {
          let urlSplit = character.split("/");
          let id = urlSplit[5];
          console.log(id);
          fetch(character)
            .then((response) => response.json())
            .then((json) => {
              castList += `<li>${json.name}</li>`;
              movie.innerHTML += castList;
            });
          console.log(character);
        });

        list.appendChild(movie);
      }
    })
    .catch((error) => {
      error.name = "Error";
      error.message = "Error al cargar la página";
      console.log(error);
    });
};
