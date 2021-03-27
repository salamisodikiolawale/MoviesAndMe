const API_TOKEN = "159770f97def067bb66bc51b98e5e9dc";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + 
  API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name){
return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
  .then((response) => response.json())
  .catch((error) => console.error(error));
}



// export function getImageFromApi(name){
//   return 'https://image.tmdb.org/t/p/w300' + name
// }

// // Récupération du détail d'un film
// export function getFilmDetailFromApi (id) {
//   return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// }