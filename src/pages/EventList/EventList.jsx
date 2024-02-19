import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import React, { useState } from 'react';

import "./EventList.css";

const EventList = () => {
  const [formData, setFormData] = useState({
    date: "",
    heading: "",
    location: "",
    img: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.heading || !formData.location || !formData.img) {
      alert("Please fill in all fields");
      return;
    }
    const newEvent = {
      id: eventList.length + 1,
      ...formData
    };
    setFormData({
      date: "",
      heading: "",
      location: "",
      img: ""
    });
    // Update eventList with the new event
    eventList.push(newEvent);
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
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>

        <div id="create-events-section">
          <h2>Create New Event</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Date:
              <input type="text" name="date" value={formData.date} onChange={handleChange} />
            </label>
            <label>
              Heading:
              <input type="text" name="heading" value={formData.heading} onChange={handleChange} />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
              Image URL:
              <input type="text" name="img" value={formData.img} onChange={handleChange} />
            </label>
            <button type="submit">Create Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventList;
