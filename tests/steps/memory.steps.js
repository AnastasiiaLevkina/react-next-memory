import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'

export function openGame () {
  render(<Page />)
}

export function gridDimensionsValidation (rows, columns) {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  return cards.length === rows * columns
}

export function allCardsFacingDownVerification () {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  cards.forEach((card) => {
    if (!card.classList.contains('facing-down')) {
      return false
    }
  })
  return true
}
