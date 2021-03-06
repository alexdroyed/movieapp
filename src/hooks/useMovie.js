import {useEffect, useState} from 'react'
import getMovie from 'services/getMovie'

/** obtains a movie by id selected */
export default function useMovie({ id }) {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getMovie(id)
            .then(movie => {
                setMovie(movie)
                setIsLoading(false)
        })
    }, [id])

    return {movie, isLoading}

}