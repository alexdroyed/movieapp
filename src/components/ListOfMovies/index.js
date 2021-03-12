import React, {useEffect, useState} from 'react'
import Movie from '../Movie'

import getMovies from '../../services/getMovies'

export default function ListOfGifs() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then(movies => setMovies(movies))
    }, [])

    return movies.map(({original_title, poster_path, popularity}) => {
        return <Movie title={original_title} poster={poster_path} usersScore={popularity} />
    })

}