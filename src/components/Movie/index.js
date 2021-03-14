import React from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'

const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function Movie({id, title, poster, usersScore}) {
    const posterURL = `https://image.tmdb.org/t/p/w500/${poster}?api_key=${apiKey}`
    return (
        <Link to={`show/${id}`} style={{textDecoration: 'none', color: '#555555'}}> 
            <div className="Movie">
                <img src={posterURL} alt="movie_poster"/>
                <h2 className="Movie-title">{title}</h2>
                <p className="Movie-score">{usersScore}⭐</p>
            </div>
        </Link>
    )
}