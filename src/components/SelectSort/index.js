import React from 'react'

export default function SelectSort({setSelected}) {
    const handleSortChange = (evt) => setSelected(evt.target.value)
    return (
        <label htmlFor="">
            Sort by:
            <select className="Select" onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="sortAlphabetically">Alphabetically</option>
                <option value="sortByUserScore">User score</option>
            </select>
        </label>
    )
}