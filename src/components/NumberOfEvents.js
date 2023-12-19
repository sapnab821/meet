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
      defaultValue="32"
      onChange={handleInputChanged}
      data-testid="numberOfEventsInput"
    />
  </div>
);
  
}

export default NumberOfEvents;