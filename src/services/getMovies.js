import {apiKey} from './settings'

export default function getMovies({categorie="top_rated"}) {
    const apiURL = `https://api.themoviedb.org/3/movie/${categorie}?api_key=${apiKey}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {results} = response
            return results
        })
}