export const API = {
  key: "Add your api",
  base: "https://api.themoviedb.org/3",
};

const api = {
  fetchTrending: `/trending/all/week?api_key=${API.key}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API.key}&language=en-US&with_networks=213`,
  fetchComedy: `/discover/movie?api_key=${API.key}&language=en-US&with_genres= 35`,
  fetchHorror: `/discover/movie?api_key=${API.key}&language=en-US&with_genres= 27`,
  fetchRomance: `/discover/movie?api_key=${API.key}&language=en-US&with_genres= 10749`,
  fetchDocumentary: `/discover/movie?api_key=${API.key}&language=en-US&with_genres= 99`,
  fetchTopRated: `/movie/top_rated?api_key=${API.key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API.key}&language=en-US&with_genres= 28`,
};

export default api;
