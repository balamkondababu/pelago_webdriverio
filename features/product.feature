Feature: pelago UI tests

  Scenario Outline: As a user, I can log into pelago website

    Given user is on the pelago home page "https://www.pelago.co/en-IN/"
    When user login with "<username>" and "<password>"
    Then user should login successfully
    Then user logout

    Examples:
      | username                 | password   |
      | balamkondababu@gmail.com | bobby@123  |
      | bobby26227@gmail.com     | Bobby@123  |


  Scenario: As a user, I am able to book an activity in pelago website
    
    Given user is on the pelago home page "https://www.pelago.co/en-IN/"
    When  user search for an activity "universal studios singapore"
    Then user select date "November 3rd, 2022"
    Then checkout the order
    Then enter booking details in booking details page "balam" "kondababu" "98765567" "bb@sample.com"
    Then proceed to payment page