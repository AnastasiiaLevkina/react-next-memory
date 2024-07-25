'use client'
import { useState } from 'react'
import './styles/card.css'

export default function Card ({ imageId }) {
  const [facingDown, setFacingDown] = useState(false)
  if (facingDown) {
    return (
      <div className='memory-card facing-down' data-testid={`memory-card card-${cardId}`}>
        .
      </div>
    )
  } else {
    return (
      <button
        className='memory-card facing-down'
        data-testid={`memory-card card-${imageId}`}
      >
        .
      </button>
    )
  }
}
