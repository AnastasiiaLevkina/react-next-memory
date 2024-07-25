import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'

export function openGame () {
  render(<Page />)
}

export function gridDimensionsValidation (numberOfCards) {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  return Number(cards.length) === Number(numberOfCards)
}

export function allCardsFacingDownVerification () {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  let result = true
  cards.forEach((card) => {
    if (!card.classList.contains('facing-down')) {
      result = false
    }
  })
  return result
}

export function allCardsEnabledVerification () {
  const cards = screen.getAllByTestId('memory-card', { exact: false })
  let result = true
  cards.forEach((card) => {
    if (card.disabled === true) {
      result = false
    }
  })
  return result
}

export function setMockData (data) {
  console.log('MOCK DATA:', data)
  data = data.trim()
  fireEvent.keyDown(screen.getByTestId('card-grid'), {
    key: 'm',
    keyCode: 77,
    which: 77,
    code: 'KeyM',
    location: 0,
    altKey: false,
    ctrlKey: true,
    metaKey: false,
    shiftKey: false,
    repeat: false
  })
  const textInput = screen.getByTestId('mock-data-input')
  const submitButton = screen.getByTestId('mock-data-submit')
  fireEvent.change(textInput, { target: { value: data } })
  fireEvent.click(submitButton)
}

export function flipTheCard (cardId) {
  fireEvent.click(screen.getByTestId('memory-card card-' + cardId, { exact: true }))
}

export function isTheCardFacingDown (cardId) {
  const card = screen.getByTestId('memory-card card-' + cardId, { exact: true })
  return card.classList.contains('facing-down')
}

export function isTheCardDisabled (cardId) {
  const card = screen.getByTestId('memory-card card-' + cardId, { exact: true })
  return card.tagName === 'DIV'
}
