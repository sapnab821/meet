import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents} from './api';
import NumberOfEvents from './components/NumberOfEvents';
import Logo from './event.png'
import { InfoAlert, ErrorAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  
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
    <div class="logo"><img src={Logo} alt="calendar" width="400" height="auto"/></div>
    <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      </div>
      <div className="error-container">
        {errorAlert ? <ErrorAlert text={errorAlert}/> : null}
      </div>
  <CitySearch allLocations={allLocations} 
              setCurrentCity={setCurrentCity} 
              setInfoAlert={setInfoAlert}/>
  <NumberOfEvents setCurrentNOE={setCurrentNOE} 
                  setErrorAlert={setErrorAlert}/>
  <EventList events={events} />
</div>

 );
}

export default App;