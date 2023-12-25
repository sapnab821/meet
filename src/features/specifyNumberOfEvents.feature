Feature: Specify Number of Events

    Scenario: Default number of events is 32
        Given the user has navigated to the events page
        When the user does not specify the number of events
        Then the default number of events is 32

    Scenario: User changes the number of events displayed
        Given the user has navigated to the events page
        When the user specifies a number of events 
        Then the page displays the specified number of events