import React from 'react'

import './Button.css'

export default function Button({handleClick, text}) {
    return (
        <button
            className="Button"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}