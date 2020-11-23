const baseUrl = 'https://api.themoviedb.org/3/'
const key = "e078f92931f4704ffe78c428275a9be6"

const fetchMovieDetails = () => {
    return fetch(`${baseUrl}trending/movie/week?api_key=${key}&`)
        .then(res => res.json())
        .then(result => result.results)
};

const fetchMovieWithId = id => {
    return fetch(`${baseUrl}movie/${id}?api_key=${key}`)
        .then(res => res.json())
        .then(result => result)
};

const fetchInfoWithId = (id, value) => {
    return fetch(`${baseUrl}movie/${id}/${value}?api_key=${key}`)
        .then(res => res.json())
        .then(result => result)
};

const fetchWithSearch = (query) => {
    return fetch(`${baseUrl}search/movie?api_key=${key}&query=${query}`)
        .then(res => res.json())
        .then(result => result)
};

const fetches = { fetchMovieDetails, fetchMovieWithId, fetchInfoWithId, fetchWithSearch }

export default fetches