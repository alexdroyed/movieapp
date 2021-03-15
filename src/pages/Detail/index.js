import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieDetail from 'components/MovieDetail'
import useMovie from 'hooks/useMovie'

import './Detail.css'

export default function Detail() {
    let { showId } = useParams()
    const {movie, isLoading} = useMovie({id: showId})

    if (isLoading) {
        return <div>cargando...</div>
    }
    
    return (
        <div className="Detail">
            <Link to="/">Home</Link>
            <MovieDetail movie={movie} />   
        </div>

    )

}