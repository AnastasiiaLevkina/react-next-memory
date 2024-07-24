'use client'
import { useState, useEffect } from 'react'
import Card from './card'
import './styles/grid.css'

export default function Grid ({ mockData }) {
  const [cardGridData, setCardGridData] = useState([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])

  /*
  useEffect(() => {
    const preData = [...cardGridData]
    // Shuffle the card list
    preData.sort(() => Math.random() - 0.5)
    setCardGridData(preData)
  })
*/

  function validateMockData (data) {
    const dataSet = new Set(data)
    // If all the elements of the array have a match
    return dataSet.size === data.length / 2
  }

  function getGridFromMockData (data) {
    let arrData = data.split('/|?|/').join('-')
    arrData = arrData.replaceAll(' ', '')
    arrData = arrData.replaceAll('|', '')
    arrData = arrData.split('-')
    console.log(arrData)
  }

  return (
    <div className='card-grid' data-testid='card-grid'>
      {cardGridData.map((card, i) => {
        return <Card key={i} cardId={card} />
      })}
    </div>
  )
}
