import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieDetail from 'components/MovieDetail'
import useMovie from 'hooks/useMovie'
import MovieDetailLoader from 'components/MovieDetailLoader'

import './Detail.css'

export default function Detail() {
    let { showId } = useParams()
    const {movie, isLoading} = useMovie({id: showId})

    if (isLoading) {
        return <MovieDetailLoader />
    }
    
    return (
        <div className="Detail">
            <Link className="Link" to="/">Home</Link>
            <MovieDetail movie={movie} />
        </div>

    )

}