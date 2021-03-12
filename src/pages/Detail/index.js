import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    let { showId } = useParams()
    return <div>Now showing post {showId}</div>
}