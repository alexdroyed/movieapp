import React, {useState} from 'react'
import ListOfMovies from 'components/ListOfMovies'
import MovieCategories from 'components/MovieCategories'
import SelectSort from 'components/SelectSort'
import ListOfMoviesLoader from 'components/ListOfMoviesLoader'
import useMovies from 'hooks/useMovies'
import useSort from 'hooks/useSort'

import './Home.css'

export default function Home() {
    const [categorie, setCategorie] = useState()
    const {movies, isLoading} = useMovies({categorie})
    const [sortedMovies, setSelectedSorted] = useSort({items: movies})
    
    // obtains what movies to list if sorted or not
    const moviesToList = sortedMovies.length ? sortedMovies : movies

    if (isLoading) {
        return <ListOfMoviesLoader />
    }

    return (
        <div className="Home">
            <div className="Categories">
                <MovieCategories setCategorie={setCategorie} />
            </div>
            <div className="Actions">
                <SelectSort setSelected={setSelectedSorted} />
            </div>
                
            <ListOfMovies movies={moviesToList} />
        </div>
    )
}