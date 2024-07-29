'use client'
import './styles/card.css'

export default function Card ({ cardId, imageId, facingDown, onCardFlipped, disabled = false }) {
  function handleCardLeftClick () {
    onCardFlipped(cardId, imageId)
  }

  function getCardFacingDown () {
    if (disabled) {
      return (
        <div
          className='memory-card facing-down'
          data-testid={`memory-card card-${cardId}`}
        />
      )
    } else {
      return (
        <button
          className='memory-card facing-down'
          data-testid={`memory-card card-${cardId}`}
          onClick={handleCardLeftClick}
        />
      )
    }
  }

  function getCardFacingUp () {
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

  if (facingDown) {
    return getCardFacingDown()
  } else {
    return getCardFacingUp()
  }
}
