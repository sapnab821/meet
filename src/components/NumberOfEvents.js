// src/components/NumberOfEvents.js
import React from 'react';


const NumberOfEvents = ({setCurrentNOE}) => {

  //const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  }

  return (
     <div id="number-of-events">
    <input
    type="text"
    
    id="number-of-events-input"
    className="number-of-events-input"
    defaultValue="32"

      
      onChange={handleInputChanged}
      
    />
  </div>
);
  
}

export default NumberOfEvents;

/*
type="text"
      name="numOfEvents"
      defaultValue="32"
      id="numberOfEventsInput"
      */