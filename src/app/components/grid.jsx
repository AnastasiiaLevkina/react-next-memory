'use client'
import { useState, useEffect } from 'react'
import Card from './card'
import './styles/grid.css'

export default function Grid ({ mockData }) {
  const [cardGridData, setCardGridData] = useState([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])

  useEffect(() => {
    let preData
    if (validateMockData(mockData)) {
      preData = getGridFromMockData(mockData)
    } else {
      preData = cardGridData
      // Shuffle the card list
      preData = [...cardGridData]
      preData.sort(() => Math.random() - 0.5)
    }
    setCardGridData(preData)
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
    console.log(arrData)
    return arrData
  }

  return (
    <div className='memory-grid' data-testid='card-grid'>
      {cardGridData.map((image, i) => {
        return <Card key={i} cardId={i + 1} imageId={image} />
      })}
    </div>
  )
}
