import { getEvents } from '../api';


describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
      EventComponent = render(<Event />);
    });
test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
})

test('render events details button with title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
})

test('displays no events by default', async () => {
    const allEvents = await getEvents(); 
    EventListComponent.rerender(<EventList events={allEvents} />);
expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

})