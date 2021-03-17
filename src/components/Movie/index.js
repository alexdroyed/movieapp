import React from 'react'
import {Link} from 'react-router-dom'
import './Movie.css'
import Favorites from 'components/Favorites'

const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function Movie({id, title, poster, usersScore, isFav}) {
    const posterURL = `https://image.tmdb.org/t/p/w500/${poster}?api_key=${apiKey}`
        
    return (
        <div className="Movie">
            <Link to={`show/${id}`} style={{textDecoration: 'none', color: '#555555'}}> 
                <img src={posterURL} alt="movie_poster"/>
                <h2 className="MovieTitle">{title}</h2>
            </Link>
            <div className="MovieFooter">
                <p className="MovieScore">{usersScore}⭐</p>
                <Favorites id ={id} isFav={isFav} />
            </div>
        </div>
    )
}