import { configureStore } from "@reduxjs/toolkit";
import favsReducer from 'components/Favorites/favsSlice'
import saveToLocalStorage from './localStorage'

// create store
const store = configureStore({
    reducer: {
        favs: favsReducer,
    },
})

// subscribe to obtain the state on every change and updtate the localstorage
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store