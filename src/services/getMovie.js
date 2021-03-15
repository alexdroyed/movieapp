import {apiKey} from './settings'

export default function getMovie(movieId) {
    const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            return response
        })
}