Feature: Memory Game
 
 As a player:
      - I want to play to the classic memory game
      - I want to uncover all the matching cards
 How to refer to a card:
      - Using the "number" nomenclature
      - The numbers start with "1"

 How to load mock data:
      - Using the <ctrl>+m keyboard combination to discover the load mock data form

 To define the mock data will use:
      "1" card id
      "-" card separator
        
Background:
    Given the player opens the game

Scenario: Starting game - Grid of cards default sizing 12 cards
    Then the grid of cards should have "12" cards

Scenario: Starting game - All the cards should be facing down
    Then all the cards should be facing down

Scenario: Starting game - All the cards should be enabled
    Then all the cards should be enabled

Scenario: Flipping a card with a mouse - Using mouse left click
    Given the player loads the following mock data:
    """
        1
    """
    When the player left clicks on the card "1"
    Then the card "1" should be facing up

Scenario: Flipping a card - Disabling the card
    Given the player loads the following mock data:
    """
        1
    """
    When the player left clicks on the card "1"
    Then the card "1" should be disabled

Scenario: Flipping two cards - Cards not matching - Keeping the cards face up
    Given the player loads the following mock data:
    """
        1-1
    """
    When the player flips the card "1"
    And the player flips the card "2"
    Then the card "1" should be facing up
    And the card "2" should be facing up

Scenario:Flipping two cards - Cards not matching - Disabling all the cards 
    Given the player loads the following mock data:
    """
        1-2-1
    """
    When the player flips the card "1"
    And the player flips the card "2"
    Then all the cards should be disabled

Scenario: Flipping two cards - Cards not matching - Flipping the cards face down after a click on the screen
    Given the player loads the following mock data:
    """
        1-2
    """
    When the player flips the card "1"
    And the player flips the card "2"
    And the player clicks on the screen
    Then the card "1" should be facing down
    And the card "2" should be facing down

Scenario: Flipping two cards - Cards not matching - Reenabling the cards after a click on the screen
    Given the player loads the following mock data:
    """
        1-2
    """
    When the player flips the card "1"
    And the player flips the card "2"
    And the player clicks on the screen
    Then the card "1" should be enabled
    And the card "2" should be enabled

Scenario: Flipping two cards - Cards matching - Keeping the cards face up
    Given the player loads the following mock data:
    """
        1-1
    """
    When the player flips the card "1"
    And the player flips the card "2"
    Then the card "1" should be facing up
    And the card "2" should be facing up

Scenario: Flipping two cards - Cards matching - Disabling the cards
    Given the player loads the following mock data:
    """
        1-1
    """
    When the player flips the card "1"
    And the player flips the card "2"
    Then the card "1" should be disabled
    And the card "2" should be disabled

Scenario: Flipping all the matching cards - Winning the game
    Given the player loads the following mock data:
    """
        1-1
    """
    When the player flips the card "1"
    And the player flips the card "2"
    Then the player should win the game