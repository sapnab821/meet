// src/components/Event.js

import { useState } from "react";


const Event = ({event}) => {
   
    const [isOpen, setIsOpen] = useState(false)
    
      return (
        <li className="event">
          <div className="event-title">{event.summary}</div>
          <div className="event-infos">
            <div>{event.created}</div>
            <div>{event.location}</div>
          </div>
          {}
          {isOpen ? (
            <details open={true} className="detailsShown">
              <summary> </summary>
              <p> {event.description} </p>
            </details>
          ) : (
            <details open={false} className="detailsHidden">
              <summary> </summary>
              <p> {event.description}</p>
            </details>
          )}
    
          <div className="details-btn">
            {isOpen ? (
              <button
                className="hide-details"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                hide details
              </button>
            ) : (
              <button
                className="show-details"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                show details
              </button>
            )}
          </div>
        </li>
      );
    };

  export default Event;