import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css";
import { Link } from "react-router-dom";


const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    category: "",
    maxParticipants: "",
    description: "",
    gpaPoints: "",
    image: null
  });

const [showSuccess, setShowSuccess] = useState(false);
const navigate = useNavigate();

const handleClosePopup = () => {
  setShowSuccess(false);
  navigate("/"); 
};

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setEventData({ ...eventData, image: files[0] });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Event Data:", eventData);
  setShowSuccess(true);
};

  return (
  <>
    <header className="top-bar">
      <div className="logo">VolunBee</div>
      <nav>
        <Link to="/" className="nav-link">Application</Link>
        <Link to="/create" className="nav-link">Create Event</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
        <Link to="#" className="nav-link">About</Link>
      </nav>
    </header>


    <div className="create-event-container">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Create New Event</h2>

        <label>Event Title</label>
        <input type="text" name="title" placeholder="Enter event title" onChange={handleChange} required />

        <div className="row">
          <div>
            <label>Start Date</label>
            <input type="date" name="startDate" onChange={handleChange} required />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" name="endDate" onChange={handleChange} required />
          </div>
        </div>

      

        <label>Location</label>
        <input type="text" name="location" placeholder="Enter event location" onChange={handleChange} required />

        <label>Event Category</label>
        <input type="text" name="category" placeholder="Enter category" onChange={handleChange} required />

        <label>Maximum Participants</label>
        <input type="number" name="maxParticipants" placeholder="Enter max participants" onChange={handleChange} required />

        <label>Event Description</label>
        <textarea name="description" placeholder="Enter event description" onChange={handleChange}></textarea>

        <label>Event Image</label>
        <div className="upload-box">
          <input type="file" name="image" onChange={handleChange} accept="image/*" />
          <span>Upload a file or drag and drop<br />PNG, JPG, GIF up to 10MB</span>
        </div>

        <label>Social GPA Points</label>
        <input type="number" name="gpaPoints" placeholder="Enter points value" onChange={handleChange} />

       <div className="buttons">
  <button
    type="button"
    className="cancel-btn"
    onClick={() => navigate("/")}
  >
    Cancel
  </button>
  <button type="submit" className="create-btn">Create Event</button>
</div>

      </form>
      {showSuccess && (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>✅ Event Created Successfully!</h3>
          <p>Your event has been saved.</p>
          <button onClick={handleClosePopup} className="ok-btn">OK</button>
        </div>
      </div>
    )}
    </div>
    
  </>

);

};


export default CreateEvent;
