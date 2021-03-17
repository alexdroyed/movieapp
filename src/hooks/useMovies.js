import {useEffect, useState} from 'react'
import getMovies from 'services/getMovies'

/** obtains the list of movies by the categorie selected */
export default function useMovies({categorie}) {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getMovies({categorie})
            .then(movies => {
                setMovies(movies)
                setIsLoading(false)
        })
    }, [categorie])

    return {movies, isLoading}
}