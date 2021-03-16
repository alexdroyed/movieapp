import React, {useEffect, useState} from 'react'
import ListOfMovies from 'components/ListOfMovies'
import Button from 'components/Button'
import getMovies from 'services/getMovies'

import './Home.css'

export default function Home() {
    const [categorie, setCategorie] = useState()
    const [movies, setMovies] = useState([])
    const [sortedMovies, setSortedMovies] = useState([])
    const [selectedSorted, setSelectedSorted] = useState('default')

    useEffect(() => {
        getMovies({categorie}).then(movies => setMovies(movies))
    }, [categorie])

    useEffect(() => {
        if (selectedSorted === "sortAlphabetically") {
            const sorted = [...movies].sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0
            })
            setSortedMovies(sorted)
        } else if (selectedSorted === "sortByUserScore") {
            const sorted = [...movies].sort((a, b) => b.vote_average - a.vote_average)
            setSortedMovies(sorted)
        } else if (selectedSorted === 'default') {
            setSortedMovies([])
        }
    }, [selectedSorted, movies])


    
    const handlePopularChange = () => setCategorie("popular")

    const handleTopRatedChange = () => setCategorie("top_rated")

    const handleNowPalyingChange = () => setCategorie("now_playing")

    const handleSortChange = (evt) => setSelectedSorted(evt.target.value)

    const moviesToList = sortedMovies.length ? sortedMovies : movies

    return (
        <div className="Home">
            <div className="Categories">
                <Button handleClick={handlePopularChange} text="populares"/>
                <Button handleClick={handleTopRatedChange} text="mejores valorados"/>
                <Button handleClick={handleNowPalyingChange} text="mas vistos"/>
            </div>
            <div className="Actions">
                <select onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="sortAlphabetically">alfabéticamente</option>
                    <option value="sortByUserScore">puntuación de usuarios</option>
                </select>
            </div>
                
            <ListOfMovies movies={moviesToList} handleFav={setFavs}/>
        </div>
    )
}