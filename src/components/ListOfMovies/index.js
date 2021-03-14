import React, {useEffect, useState} from 'react'
import Movie from 'components/Movie'

import getMovies from 'services/getMovies'

import './ListOfMovies.css'

export default function ListOfGifs() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then(movies => setMovies(movies))
    }, [])

    return (
        <div className="ListOfMovies">
            {
                movies.map(({original_title, poster_path, popularity}) =>
                    <Movie
                        title={original_title}
                        poster={poster_path}
                        usersScore={popularity}
                    />
                )
            }
        </div>
    )

}