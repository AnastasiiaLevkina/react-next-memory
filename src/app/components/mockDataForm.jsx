'use client'
import { useState } from 'react'

export default function MockDataForm ({ setData }) {
  const [mockData, setMockData] = useState('1-1')
  function handleSubmit (e) {
    e.preventDefault()
    setData(mockData)
  }

  const handleInputChange = (e) => {
    setMockData(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type='text'
        value={mockData}
        cols='40'
        rows='8'
        onChange={handleInputChange}
        data-testid='mock-data-input'
        style={{ width: '100%', height: '100px' }}
      />
      <button data-testid='mock-data-submit' type='submit'>Submit</button>
    </form>
  )
}
