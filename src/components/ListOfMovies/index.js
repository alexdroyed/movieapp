import React from 'react'
import Movie from 'components/Movie'
import { useSelector } from 'react-redux'


import './ListOfMovies.css'

export default function ListOfMovies({movies}) {
    const favs = useSelector(state => state.favs)

    return (
        <div className="ListOfMovies">
            {
                movies.map(({id, title, poster_path, vote_average}) => {
                    const isFav = favs.includes(id)
                    return <Movie
                        key={id}
                        id={id}
                        title={title}
                        poster={poster_path}
                        usersScore={vote_average}
                        isFav={isFav}
                    />
                })
            }
        </div>
    )

}