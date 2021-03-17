import React from 'react'

import './MovieDetail.css'

const apiKey = '1a09dcf42c6c621e5b547c2f53c489b3'

export default function MovieDetail({movie}) {
    const {title, poster_path, overview, vote_average, runtime, genres} = movie

    return (
        <div className="MovieDetail">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=${apiKey}`} alt="movie_poster"/>
            <h2 className="Title">{title}</h2>
            <div className="Genres">
                <p>Genres</p>
                <ul className="GenresList">
                {genres.map(({id, name}) => {
                    return <li key={id}>{name}</li> 
                })}
                </ul>
            </div>
            
            <div className="Overview">
                <p>Overview</p>
                <p>{overview}</p>
            </div>
            <p className="VoteAverage">{vote_average}⭐</p>
            <p className="Runtime">Duration: {runtime}min</p>
        </div>
    )
}