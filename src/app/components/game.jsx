'use client'
import { useState, useEffect } from 'react'
import Grid from './grid'
import MockDataForm from './mockDataForm'

export default function Game () {
  const [mockDataFormVisible, setMockDataFormVisible] = useState(false)
  const [mockData, setMockData] = useState('')
  const [title, setTitle] = useState('Memory')

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  function handleKeyPress (e) {
    if (e.ctrlKey && e.key.toUpperCase() === 'M') {
      setMockDataFormVisible(!mockDataFormVisible)
    }
  }

  function setWinningTitle () {
    setTitle('Congrapulations, you won!')
  }

  return (
    <center>
      <h1 data-testid='game-header'>{title}</h1>
      {mockDataFormVisible && <MockDataForm setData={setMockData} />}
      <Grid mockData={mockData} onGameWon={setWinningTitle} />
    </center>
  )
}
