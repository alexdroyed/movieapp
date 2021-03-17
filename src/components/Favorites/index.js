import React, {useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {favAdded, favRemoved} from 'components/Favorites/favsSlice'

export default function Favorites({id, isFav}) {
    const [fav, setFav] = useState(isFav)
    const dispatch = useDispatch()

    useEffect(() => {
        if (fav) {
            dispatch(favAdded(id))
        } else if (!fav) {
            dispatch(favRemoved({id}))
        }
    }, [fav, id, dispatch])

    const handleFavChange = () => {
        setFav(!fav)
    }

    return (
        <button className="MovieFav" onClick={handleFavChange}>{fav ? "❤️" : "🤍"}</button>
    )
}
