import React from 'react'
import './Movie.css'

const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function Movie({title, poster, usersScore}) {
    const posterURL = `https://image.tmdb.org/t/p/w500/${poster}?api_key=${apiKey}`
    return (
        <div className="Movie">
            <p>{title}</p>
            <img src={posterURL} alt="movie_poster"/>
            <p>{usersScore}</p>
        </div>
    )
}