import { useEffect, useState } from 'react'

/**
 * return sorted alphabetically or by user score movies.
 * selectedSorted only accepts default, sortAlphabetically, sortByUserScore
 */
export default function useSort({items}) {
    const [sortedItems, setSortedItems] = useState([])
    const [selectedSorted, setSelectedSorted] = useState('default')

    useEffect(() => {
        if (selectedSorted === "sortAlphabetically") {
            const sorted = [...items].sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0
            })
            setSortedItems(sorted)
        } else if (selectedSorted === "sortByUserScore") {
            const sorted = [...items].sort((a, b) => b.vote_average - a.vote_average)
            setSortedItems(sorted)
        } else if (selectedSorted === 'default') {
            setSortedItems([])
        }
    }, [items, selectedSorted])

    return [sortedItems, setSelectedSorted]
}
