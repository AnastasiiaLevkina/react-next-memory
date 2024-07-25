'use client'
import './styles/card.css'

export default function Card ({ cardId, imageId, facingDown, onCardFlipped }) {
  function handleCardLeftClick () {
    onCardFlipped(cardId, imageId)
  }

  if (facingDown) {
    return (
      <button
        className='memory-card facing-down'
        data-testid={`memory-card card-${cardId}`}
        onClick={handleCardLeftClick}
      />
    )
  } else {
    return (
      <div
        className='memory-card'
        data-testid={`memory-card card-${cardId}`}
      >
        <img
          src={`cardImages/img${imageId}.png`}
          className='card-image'
        />
      </div>
    )
  }
}
