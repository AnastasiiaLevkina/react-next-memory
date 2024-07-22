import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/memory.steps'
const feature = loadFeature('./tests/features/sample.feature')

defineFeature(feature, (test) => {
  test('Test the sample feature', ({ given, then, pending }) => {
    given('the player opens the game', () => {
      steps.openThePage()
    })
  })
})
