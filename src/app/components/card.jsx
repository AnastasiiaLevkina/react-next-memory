'use client'
import { useState } from 'react'
import './styles/card.css'

export default function Card ({ cardId, imageId }) {
  const [facingDown, setFacingDown] = useState(true)
  function handleCardClick () {
    setFacingDown(!facingDown)
  }

  if (facingDown) {
    return (
      <button
        className='memory-card facing-down'
        data-testid={`memory-card card-${cardId}`}
        onClick={handleCardClick}
      />
    )
  } else {
    return (
      <div
        className='memory-card'
        data-testid={`memory-card card-${cardId}`}
      >
        <img
          src='https://freepngimg.com/download/whatsapp/73733-emoticon-smiley-wink-smile-whatsapp-emoji.png'
          className='card-image'
        />
      </div>
    )
  }
}
