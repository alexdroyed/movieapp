import React, {useState} from 'react'
import ListOfMovies from 'components/ListOfMovies'
import Button from 'components/Button'

import './Home.css'

export default function Home() {
    const [categorie, setCategorie] = useState()
    
    const handlePopularChange = () => setCategorie("popular")

    const handleTopRatedChange = () => setCategorie("top_rated")

    const handleNowPalyingChange = () => setCategorie("now_playing")

    return (
        <div className="Home">
            <div className="Categories">
                <Button handleClick={handlePopularChange} text="populares"/>
                <Button handleClick={handleTopRatedChange} text="mejores valorados"/>
                <Button handleClick={handleNowPalyingChange} text="mas vistos"/>
            </div>
                
            <ListOfMovies categorie={categorie}/>
        </div>
    )
}