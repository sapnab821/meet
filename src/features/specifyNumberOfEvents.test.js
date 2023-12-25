import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('Default number of events is 32', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user has navigated to the events page', () => {
            AppComponent = render(<App />);
            
        });

        when('the user does not specify the number of events', async () => {
            AppComponent = render(<App />);
        });

        then('the default number of events is 32', async () => {
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const EventListDOM = AppDOM.querySelector('#event-list');
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);

            });
        });
    })

    test('User changes the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let textBox;
        let NumberOfEvents;
        given('the user has navigated to the events page', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        when('the user specifies a number of events', async () => {
            const user = userEvent.setup();

            await waitFor(() => {
                AppDOM = AppComponent.container.firstChild;
                NumberOfEvents = AppDOM.querySelector('#number-of-events');
                textBox = within(NumberOfEvents).getByRole('textbox');

            })

            await user.type(textBox, '{backspace}{backspace}10');
        })

        then('the page displays the specified number of events', () => {
            AppDOM = AppComponent.container.firstChild;
            NumberOfEvents = AppDOM.querySelector('#number-of-events');
            textBox = within(NumberOfEvents).getByRole('textbox');
            expect(textBox).toHaveValue('10');
        }
        );
    });

}); 
