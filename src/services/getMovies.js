const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function getMovies() {
    const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {results} = response
            return results
        })
}