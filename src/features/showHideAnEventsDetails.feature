Feature: Show and hide events details
 Scenario: Event details are collapsed by default.
  Given the user first opens the app
  When the user views the list of events (specific for the city or all events)
  Then all events will be collapsed by default.
 Scenario: User can expand an event to see its details
  Given the user sees a specific event
  When user clicks show details of an event
  Then the details of the events will be visible
 Scenario: User can collapse an event to hide its details
  Given the user sees the details of an event
  When the user presses the hide details button
  Then the details of that even will be hidden