import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Event details are collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user first opens the app', async () => {
            AppComponent = render(<App />);
        });
            
        when('the user views the list of events (specific for the city or all events)', async() => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('.event');
    
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems).toBeInTheDocument();
            });
          }
        )

    
            let detailsButton; 
        then('all events will be collapsed by default.', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            detailsButton= AppDOM.querySelector('.details-btn');
            const clickButton = within(detailsButton).querySelector('.hide-details');  
            //await user.click(clickButton, 'button');
        });
    })
    });

    //Feature file has a scenario titled "User can expand an event to see its details", but no match found in step definitions. Try adding the following code:

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user sees a specific event', () => {

        });

        when('user clicks show details of an event', () => {

        });

        then('the details of the events will be visible', () => {

        });
    });

    //Feature file has a scenario titled "User can collapse an event to hide its details", but no match found in step definitions. Try adding the following code:

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user sees the details of an event', () => {

        });

        when('the user presses the hide details button', () => {

        });

        then('the details of that even will be hidden', () => {

        });
    });

