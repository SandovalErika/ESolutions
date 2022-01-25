// deben lograr hacer que en la página se muestre el listado de películas y (en lugar de las URL de los personajes) el listado de personaje (actor) de cada película.

// Deben generar fetch en paralelo y cando se hayan cargado los nombres, cargar la película y luego ir a la siguiente. En caso de que ocurriese un error en alguno de los fetch deben "solucionarlo" de alguna forma, pero la película y el "listado de personajes" no se debe dejar de mostrar. Por otro lado, si el personaje ya existe, no se debe volver a pedir en un fetch para la siguiente película, sino extraerlo de un Set o arrary.

const loadJson = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const json = await response.json();
    const list = document.querySelector("ul");

    for (let i = 0; i < json.results.length; i++) {
      const movie = document.createElement("li");

      movie.innerHTML = `<h2>${json.results[i].title}</h2>`;
      movie.innerHTML += `<h3>Episode ${json.results[i].episode_id}</h3>`;
      movie.innerHTML += `<p>${json.results[i].opening_crawl}</p>`;

      let castList = "<ul>";
      let url = json.results[i].characters.map(async (url) => {
        return `<li>${await urlCharacter(url)}</li>`;
      });

      let dataUrl = await Promise.all(url);
      console.log(dataUrl);

      castList += dataUrl.join("");
      console.log(castList);

      movie.innerHTML += `Cast: ${castList}`;
      list.appendChild(movie);
    }
  } catch (error) {
    console.log(error.title);
  }
};

const urlCharacter = async (url) => {
  const respCharacter = await fetch(url);
  const dato = await respCharacter.json();
  return dato.name;
};
