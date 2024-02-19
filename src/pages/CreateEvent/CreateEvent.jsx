import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from the uuid package
import "../EventDetails/EventDetails.css"
import './CreateEvent.css'

function ComicConForm({ onSubmit }) {
  const [id, setId] = useState(generateId()); // Generate an initial 6-digit ID
  const [heading, setHeading] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      heading: heading,
      date: { year: year, month: month },
      location: location,
      description: description,
      img: img,
    };
    onSubmit(data);
  };

  function generateId() {
    // Generate a random 6-digit number
    return Math.floor(100000 + Math.random() * 900000);
  }

  return (
    <div className="event-create">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} readOnly />
        </label>
        <br />
        <label>
          Heading:
          <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />
        </label>
        <br />
        <label>
          Year:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <label>
          Month:
          <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComicConForm;
