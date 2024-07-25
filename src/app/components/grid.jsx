'use client'
import { useState, useEffect } from 'react'
import Card from './card'
import './styles/grid.css'

export default function Grid ({ mockData }) {
  const [cardGridData, setCardGridData] = useState([])
  const [selectedCard, setSelectedCard] = useState({
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
    setCardGridData(preData)
    console.log('CARD GRID DATA:', cardGridData)
  }, [mockData])

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
      console.log('SELECTED SECOND CARD')
      console.log('1st IMAGE ID:', selectedCard.imageId, '2nd IMAGE ID:', imageId)
      if (imageId !== selectedCard.imageId) {
        console.log('NOT A COINCIDENCE!')
        newGridData[cardId - 1].facingDown = true
        newGridData[selectedCard.cardId - 1].facingDown = true
      }
      setSelectedCard({ cardId: 0, imageId: 0 })
    } else {
      console.log('SELECTED FIRST CARD')
      setSelectedCard({ cardId, imageId })
    }
    setCardGridData(newGridData)
  }

  return (
    <div className='memory-grid' data-testid='card-grid'>
      {cardGridData.map((card, i) => {
        return (
          <Card
            key={i} cardId={i + 1}
            imageId={card.imageId}
            facingDown={card.facingDown}
            onCardFlipped={onCardFlipped}
          />
        )
      })}
    </div>
  )
}
