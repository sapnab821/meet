// src/components/NumberOfEvents.js
import React from 'react';


const NumberOfEvents = ({setCurrentNOE, setErrorAlert}) => {

  //const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  

  let errorText;
  if (isNaN(value)) {
    errorText = "Value is not a number"
  } else if (value <= 0){
    errorText = "Enter a valid number"
  } else if (value > 70){
    errorText = "Value is too large"
  } else {
    errorText = ""
  }
  setErrorAlert(errorText);
  
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