import React from 'react'
import Button from 'components/Button'

export default function MovieCategories({setCategorie}) {
    
    const handlePopularChange = () => setCategorie("popular")

    const handleTopRatedChange = () => setCategorie("top_rated")

    const handleNowPalyingChange = () => setCategorie("now_playing")

    return (
        <>
            <Button handleClick={handlePopularChange} text="Popular"/>
            <Button handleClick={handleTopRatedChange} text="Top rated"/>
            <Button handleClick={handleNowPalyingChange} text="Now playing"/>
        </>
    )
}