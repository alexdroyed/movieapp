import { createSlice } from '@reduxjs/toolkit'

// check if are favs on localstorage to set as initial state
let initialState = []
const persistedFavs = localStorage.getItem('favs')

if (persistedFavs) {
    initialState = [...JSON.parse(persistedFavs).favs]
}

/**
 * create favorites state and reducers
 */
const favsSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        favAdded(state, action) {
            state.push(action.payload)
        },
        favRemoved(state, action) {
            const { id } = action.payload
            return state.filter(item => item !== id)
        }
    }
})

export const { favAdded, favRemoved } = favsSlice.actions

export default favsSlice.reducer
