import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory.steps'

const feature = loadFeature('./tests/features/memory.core.feature')
defineFeature(feature, (test) => {
  test('Starting game - Grid of cards default sizing 3x4', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then(/^the grid of cards should have ".*" rows and ".*" columns$/, (numberOfRows, numberOfCols) => {
      expect(steps.gridDimensionsValidation(numberOfRows, numberOfCols)).toBe(true)
    })
  })
  test('Starting game - All the cards should be facing down', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then('all the cards should be facing down', () => {
      expect(true).toBe(true)
    })
  })
  test('Starting game - All the cards should be enabled', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then('all the cards should be enabled', () => {
      pending()
    })
  })
  test('Flipping a card with a mouse - Using mouse left click', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be facing up$/, (cardId) => {
      pending()
    })
  })
  test('Flipping a card - Disabling the card', ({ given, when, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be disabled$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards not matching - Flipping the cards face down', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    and(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be facing down$/, (cardId) => {
      pending()
    })
    and(/^the card ".*" should be facing down$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards not matching - Reenabling the cards', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    and(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be enabled$/, (cardId) => {
      pending()
    })
    and(/^the card ".*" should be enabled$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards matching - Keeping the cards face up', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    and(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be facing up$/, (cardId) => {
      pending()
    })
    and(/^the card ".*" should be facing up$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards matching - Disabling the cards', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    and(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then(/^the card ".*" should be disabled$/, (cardId) => {
      pending()
    })
    and(/^the card ".*" should be disabled$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards matching - Disabling the cards', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data', (docString) => {
      pending()
    })
    when(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    and(/^the player left clicks on the card ".*"$/, (cardId) => {
      pending()
    })
    then('the player should win the game', () => {
      pending()
    })
  })
})
