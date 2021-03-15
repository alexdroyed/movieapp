import React from 'react'
import Movie from 'components/Movie'


import './ListOfMovies.css'

export default function ListOfMovies({movies}) {

    return (
        <div className="ListOfMovies">
            {
                movies.map(({id, title, poster_path, vote_average}) =>
                    <Movie
                        key={id}
                        id={id}
                        title={title}
                        poster={poster_path}
                        usersScore={vote_average}
                    />
                )
            }
        </div>
    )

}