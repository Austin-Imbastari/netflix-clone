const API_KEY = process.env.REACT_APP_NETFLIX_API_KEY;
export const baseUrl = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${baseUrl}/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
