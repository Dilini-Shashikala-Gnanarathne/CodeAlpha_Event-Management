import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import ComicConForm from "../CreateEvent/CreateEvent.jsx"
import React, { useState } from 'react';

import "./EventList.css";
const EventList = () => {

  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };
  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>

        <div id="create-events-section">
        {formData && (
        <div>
          <h2>Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
      <ComicConForm onSubmit={handleFormSubmit} />
      </div>
    </div></div>
  );
};
export default EventList;