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
      className="numOfEvents"
      defaultValue="32"
      id="numberOfEventsInput"
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