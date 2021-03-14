import React from 'react'
import { useParams } from 'react-router-dom'
import useMovie from 'hooks/useMovie'

const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function Detail() {
    let { showId } = useParams()
    const {movie, isLoading} = useMovie({id: showId})

    if (isLoading) {
        return <div>cargando...</div>
    } 
    
    return (
        <div className="Movie">
            <p>{movie.original_title}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=${apiKey}`} alt="movie_poster"/>
            <p>{movie.overview}</p>
            <p>{movie.popularity}</p>
        </div>
    )

}