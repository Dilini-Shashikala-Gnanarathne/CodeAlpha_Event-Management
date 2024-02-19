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
    if (name === "year") {
      setFormData({
        ...formData,
        date: {
          ...formData.date,
          year: parseInt(value)
        }
      });
    } else if (name === "month") {
      setFormData({
        ...formData,
        date: {
          ...formData.date,
          month: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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

        <div id="create-events-section" className="create-events">
          <h2>Create New Event</h2>
          <form onSubmit={handleSubmit}>
           <label className="label1">
            Year:
            <input type="number" name="year" value={formData.date.year} onChange={handleChange} />
          </label>
          <label  className="label2">
            Month:
            <input type="text" name="month" value={formData.date.month} onChange={handleChange} />
          </label>
            <label className="label3">
              Heading:
              <input type="text" name="heading" value={formData.heading} onChange={handleChange} />
            </label>
            <label className="label4">
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label className="label5">
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
