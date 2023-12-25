import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Event details are collapsed by default.', ({ given, when, then }) => {
        let AppComponent
        given('the user first opens the app', async () => {
            AppComponent = render(<App />);
        });
            
        when('the user views the list of events (specific for the city or all events)', async() => {
            const AppDOM = AppComponent.container.firstChild;
            
    
            await waitFor(() => {
                const EventListDOM = AppDOM.querySelector('#event-list');
                expect(EventListDOM).toBeInTheDocument();
            });
          }
        )

        then('all events will be collapsed by default.', async() => {
        await waitFor(()=> {
            const EventDOM = AppComponent.container.firstChild;
            const hideDetails = EventDOM.querySelector('.detailsHidden');
            expect(hideDetails).toBeInTheDocument();
            })

            
    });

})
    

    //Feature file has a scenario titled "User can expand an event to see its details", but no match found in step definitions. Try adding the following code:

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        given('the user sees a specific event', async () => {
         AppComponent = render(<App />) ;

    const AppDOM = AppComponent.container.firstChild;

    await waitFor(() => {
      const eventList = within(AppDOM).queryAllByRole('listitem');
      expect(eventList[0]).toBeTruthy();
        });

        });

        when('user clicks show details of an event', async () => {
            const button = AppComponent.queryAllByText('show details')[0];
            await userEvent.click(button);
        });

        

        then('the details of the events will be visible', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.detailsShown');
            expect(details).toBeInTheDocument();
                });

        
    });

    //Feature file has a scenario titled "User can collapse an event to hide its details", but no match found in step definitions. Try adding the following code:
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let button, AppComponent, AppDOM;
        given('the user sees the details of an event', async() => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;

            let EventListItems;
            
            await waitFor(() => {
                const EventListDOM = AppDOM.querySelector('#event-list');
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        
            const user = userEvent.setup();

            button = AppComponent.queryAllByText('show details')[0];
            
            await user.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.detailsShown');
            expect(details).toBeInTheDocument();
                
        });

        when('the user presses the hide details button', async() => {
            const user = userEvent.setup();

            await user.click(button);
        });

        then('the details of that event will be hidden', () => {
            const EventDOM = AppComponent.container.firstChild;
            const hideDetails = EventDOM.querySelector('.detailsHidden');
            expect(hideDetails).toBeInTheDocument();
        });
    });



})