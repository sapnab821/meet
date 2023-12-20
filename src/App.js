import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents} from './api';
import NumberOfEvents from './components/NumberOfEvents';
import Logo from './event.png'

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  
  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();

    
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };


  

 return (
  <div className="App">
    <h1>Meet App</h1>
    <div class="logo"><img src={Logo} alt="hands" width="400" height="auto"/></div>
    <div></div>
    <div></div>
  <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
  <NumberOfEvents setCurrentNOE={setCurrentNOE} />
  <EventList events={events} />
</div>

 );
}

export default App;