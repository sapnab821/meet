This meet app was created by CRA

The TDD technique is used so the meet app can work offline
User will be able to use the app when they want to view events that are upcoming for a specific city
The server is a serverless function hosted by a cloud provider (e.g.,
AWS). The application itself is also hosted online to make it shareable and installable. It can
be used even when the user is offline. As it’s responsive, it displays well on any device.
Serverless is the next generation of cloud infrastructure, PWA provides great user
experience and performance, and the TDD technique ensures you have quality code and
adequate test coverage. All of these skills, together with data visualization, will distinguish
you from other web developers.

The Meet app will use AWS Lambda, which is serverless (Faas), for authorization. For the API the consumer key, the consumer secret and an access token are needed for authorization. The User will use the key and secret, which is essentially a username and password to grant access for the serverless function hosted on AWS Lambda to provide the access token. When the user grants access to Google calendar, the serverless function displays the events. The authorization sends back an access token which is used when the user is logged into the app. 


Feature 2
As a user, 
I should be able to show event details from default or hide event details after revealing them
So that I can see details of event or hide the details of an event 

Feature 3
As a user,
I should be able to change the number of events shown from 32 default 
So that I can see the number of events at a time that is convenient/desirable to me.

Feature 4
    As a user,
I should be able to user the app without internet connection if the settings stay the same.
So that I have access to event list even if internet is not working at the moment. 

Feature 5
    As a user,
    I should be able to install the meet app as a shortcut on my device
    So that I have more convenient access to the app.

Feature 6
    As a user,
     I should be able to see a chart with the number of available events in each city
    So I know of the number of events in each city. 

Gherkin Style
Feature 2
    Given the event is set to default
When the user has expanded an event
Then the user should be able to see event details

Feature 3
    Given the default number of events of 32 is shown
    When the user changes the number of events shown
    Then the number events shown should change to the number set by user

Feature 4
    Given the app settings are not changed by the user
    When the internet connection is turned off
    Then the user should still be able to see the event list
Feature 5
    Given the user is using a personal device
    When the user installs the meet app on their device
    Then the user should be able to use the app on their device

Feature 6
    Given the user is logged onto the meet app
    When the user click on the chart of events in a city
    Then the user should be able to see the number of events in that city
