import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import CityEventsChart from './components/CityEventsChart';
import EventGenreChart from './components/EventGenresChart';
import './App.css';
import { useState, useEffect } from 'react';
import { extractLocations, getEvents} from './api';
import NumberOfEvents from './components/NumberOfEvents';
import Logo from './event.png'
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import "./nprogress.css";


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  
  }
  useEffect(() => {
    if (navigator.onLine) {
      //setWarningAlert("You are currently offline");
    } else if (!navigator.onLine){
      setWarningAlert("You are currently offline");
    }
    fetchData();
  }, [currentCity, currentNOE]);



 return (
  <div>
  <div className="App">
    <h1>Meet App</h1>
    <div class="logo"><img src={Logo} alt="calendar" width="400" height="auto"/></div>
    <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
  </div>
  <CitySearch allLocations={allLocations} 
              setCurrentCity={setCurrentCity} 
              setInfoAlert={setInfoAlert}/>
  <NumberOfEvents setCurrentNOE={setCurrentNOE} 
                  setErrorAlert={setErrorAlert}/>
  <div className="charts-container">
  <CityEventsChart allLocations={allLocations} events={events} />
  <EventGenreChart events = {events}/>
  </div>
  
  <EventList events={events} />
  </div>
</div>

 );
}

export default App;