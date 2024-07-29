'use client'
import { useState, useEffect } from 'react'
import Card from './card'
import './styles/grid.css'

export default function Grid ({ mockData, onGameWon }) {
  const [cardGridData, setCardGridData] = useState([])
  const [awaitingClick, setAwaitingClick] = useState(false)
  const [pairsLeftToMatch, setPairsLeftToMacth] = useState(0)

  const [selectedCard, setSelectedCard] = useState({
    cardId: 0,
    imageId: 0
  })
  const [secongSelectedCard, setSecondSelectedCard] = useState({
    cardId: 0,
    imageId: 0
  })

  useEffect(() => {
    let preData
    if (validateMockData(mockData)) {
      preData = getGridFromMockData(mockData)
    } else {
      preData = generateCardGrid()
    }
    preData.forEach((card) => {
      card.facingDown = true
    })
    setCardGridData(preData)
    setPairsLeftToMacth(preData.length / 2)
    console.log('CARD GRID DATA:', cardGridData)
  }, [mockData])

  function onClickToFlipUnmatchingCards () {
    const newGridData = [...cardGridData]
    newGridData[selectedCard.cardId - 1].facingDown = true
    newGridData[secongSelectedCard.cardId - 1].facingDown = true
    setAwaitingClick(false)
    setSelectedCard({ cardId: 0, imageId: 0 })
    setSecondSelectedCard({ cardId: 0, imageId: 0 })
    setCardGridData(newGridData)
  }

  function validateMockData (data) {
    let result = true
    if (data === undefined || data === '') {
      result = false
    } else {
      const newLocal = '^[\\d-]+$'
      const regex = new RegExp(newLocal)
      result = regex.test(data)
    }

    return result
  }

  function getGridFromMockData (data) {
    const arrData = data.replaceAll(' ', '').split('-')
    const newGridData = []
    arrData.forEach((card) => {
      newGridData.push({
        imageId: card,
        facingDown: true
      })
    })
    return newGridData
  }

  function generateCardGrid () {
    const imagesCollection = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    const newGridData = []
    imagesCollection.forEach((image) => {
      newGridData.push({
        imageId: image,
        facingDown: true
      })
    })
    // Shuffle the array
    newGridData.sort(() => Math.random() - 0.5)
    return newGridData
  }

  function onCardFlipped (cardId, imageId) {
    const newGridData = [...cardGridData]
    newGridData[cardId - 1].facingDown = false
    if (selectedCard.cardId !== 0) {
      setSecondSelectedCard({ cardId, imageId })
      if (imageId !== selectedCard.imageId) {
        setAwaitingClick(true)
      } else {
        setSelectedCard({ cardId: 0, imageId: 0 })
        setSecondSelectedCard({ cardId: 0, imageId: 0 })
        setPairsLeftToMacth((pairsLeftToMatch) => pairsLeftToMatch - 1)
        console.log(pairsLeftToMatch)
        if (pairsLeftToMatch === 1) {
          onGameWon()
        }
      }
    } else {
      setSelectedCard({ cardId, imageId })
    }
    setCardGridData(newGridData)
  }

  if (awaitingClick) {
    return (
      <div className='memory-grid' data-testid='card-grid' onClick={onClickToFlipUnmatchingCards}>
        {cardGridData.map((card, i) => {
          return (
            <Card
              key={i} cardId={i + 1}
              imageId={card.imageId}
              facingDown={card.facingDown}
              disabled
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='memory-grid' data-testid='card-grid'>
        {cardGridData.map((card, i) => {
          return (
            <Card
              key={i} cardId={i + 1}
              imageId={card.imageId}
              facingDown={card.facingDown}
              onCardFlipped={onCardFlipped}ç
              disabled={awaitingClick}
            />
          )
        })}
      </div>
    )
  }
}
