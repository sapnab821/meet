import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents} from './api';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  

 return (
  <div className="App">
  <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
  <NumberOfEvents />
  <EventList events={events} />
</div>

 );
}

export default App;