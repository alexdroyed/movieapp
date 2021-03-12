import React from 'react'

export default function Movie({title, poster, usersScore}) {
    return (
        <div>
            <p>{title}</p>
            <img src={poster} alt="movie_poster"/>
            {usersScore}
        </div>
    )
}