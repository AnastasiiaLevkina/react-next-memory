import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory.steps'

const feature = loadFeature('./tests/features/memory.core.feature')
defineFeature(feature, (test) => {
  test('Starting game - Grid of cards default sizing 3x4', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then(/^the grid of cards should have "(.*)" cards$/, (numberOfCards) => {
      expect(steps.gridDimensionsValidation(numberOfCards)).toBe(true)
    })
  })
  test('Starting game - All the cards should be facing down', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then('all the cards should be facing down', () => {
      expect(steps.allCardsFacingDownVerification()).toBe(true)
    })
  })
  test('Starting game - All the cards should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    then('all the cards should be enabled', () => {
      expect(steps.allCardsEnabledVerification()).toBe(true)
    })
  })
  test('Flipping a card with a mouse - Using mouse left click', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })
    when(/^the player left clicks on the card "(.*)"$/, (cardId) => {
      steps.flipTheCard(cardId)
    })
    then(/^the card "(.*)" should be facing up$/, (cardId) => {
      expect(steps.isTheCardFacingDown(cardId)).toBe(false)
    })
  })
  test('Flipping a card - Disabling the card', ({ given, when, then }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })
    when(/^the player left clicks on the card "(.*)"$/, (cardId) => {
      steps.flipTheCard(cardId)
    })
    then(/^the card "(.*)" should be disabled$/, (cardId) => {
      expect(steps.isTheCardDisabled(cardId)).toBe(true)
    })
  })
  test('Flipping two cards - Cards not matching - Flipping the cards face down', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data:', (docString) => {
      steps.setMockData(docString)
    })
    when(/^the player flips the card "(.*)"$/, (cardId) => {
      steps.flipTheCard(cardId)
    })
    and(/^the player flips the card "(.*)"$/, (cardId) => {
      steps.flipTheCard(cardId)
    })
    then(/^the card "(.*)" should be facing down$/, (cardId) => {
      expect(steps.isTheCardFacingDown(cardId)).toBe(true)
    })
    and(/^the card "(.*)" should be facing down$/, (cardId) => {
      expect(steps.isTheCardFacingDown(cardId)).toBe(true)
    })
  })
  test('Flipping two cards - Cards not matching - Reenabling the cards', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      steps.openGame()
    })
    given('the player loads the following mock data:', (docString) => {
      pending()
    })
    when(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    and(/^the player flips the card "(.*)"$/, (cardId) => {
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
    given('the player loads the following mock data:', (docString) => {
      pending()
    })
    when(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    and(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    then(/^the card "(.*)" should be facing up$/, (cardId) => {
      pending()
    })
    and(/^the card "(.*)" should be facing up$/, (cardId) => {
      pending()
    })
  })
  test('Flipping two cards - Cards matching - Disabling the cards', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data:', (docString) => {
      pending()
    })
    when(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    and(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    then(/^the card "(.*)" should be disabled$/, (cardId) => {
      pending()
    })
    and(/^the card "(.*)" should be disabled$/, (cardId) => {
      pending()
    })
  })
  test('Flipping all the matching cards - Winning the game', ({ given, when, and, then, pending }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data:', (docString) => {
      pending()
    })
    when(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    and(/^the player flips the card "(.*)"$/, (cardId) => {
      pending()
    })
    then('the player should win the game', () => {
      pending()
    })
  })
})
