Feature: Robobar cart

  // =====================================================================================================================================================
  // AFEGIR, pas a pas, del fitxer <robobar.feature> de hello-selinide-gft/src/test/resources/com/sinensia/helloselenide/cucumber/
  // =====================================================================================================================================================

  @focus
  Scenario: user add one cola
    Given user opens robobar website
    When user adds a cola
    Then total should be €1.25

  Scenario Outline: user buy several drinks
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    And user checks out
    And user is <age> years old
    But checkout result is "<expected>"
    Examples:
      | cola | beer | wine | total | age | expected |
      | 1    | 0    | 0    | 1.25  | 17  | pass     |
      | 1    | 1    | 0    | 3.25  | 17  | fail     |