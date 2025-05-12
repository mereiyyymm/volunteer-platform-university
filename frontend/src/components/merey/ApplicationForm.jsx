import React, { useState } from "react";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    faculty: "",
    year: "",
    reason: "",
    preferences: [],
  });

  const preferencesList = [
    "I can help with participant registration",
    "I can assist with setup and cleanup",
    "I can help with photography/documentation",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedPrefs = checked
        ? [...formData.preferences, value]
        : formData.preferences.filter((pref) => pref !== value);
      setFormData({ ...formData, preferences: updatedPrefs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Application submitted!");
  };

  return (
    <div className="page">
      <header className="top-bar">
        <div className="logo">VolunBee</div>
        <nav>
          <a href="#">Events</a>
          <a href="#">My Profile</a>
          <a href="#">About</a>
        </nav>
      </header>

      <div className="form-container">
        <div className="back-link">← Back to Event Details</div>
        <h2 className="form-title">Volunteer Application</h2>

        <div className="event-box">
          <div>
            <strong>Campus Clean-up Drive</strong>
            <div>📅 Oct 15, 2023 • 🕒 10:00 AM</div>
            <div>📍 Campus Center</div>
          </div>
          <div className="gpa-box">+0.2 GPA</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input name="firstName" placeholder="First Name*" required onChange={handleChange} />
            <input name="lastName" placeholder="Last Name*" required onChange={handleChange} />
            <input name="email" placeholder="Email Address*" required type="email" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number*" required type="tel" onChange={handleChange} />
            <input name="faculty" placeholder="Faculty*" required onChange={handleChange} />
            <input name="year" placeholder="Year of Study*" required onChange={handleChange} />
          </div>

          <label className="textarea-label">Why do you want to participate? (Optional)</label>
          <textarea
            name="reason"
            placeholder="Why do you want to participate? (Optional)"
            onChange={handleChange}
          ></textarea>

          <p className="pref-title">Preferences</p>
          <div className="checkboxes">
            {preferencesList.map((item, index) => (
              <label key={index}>
                <input type="checkbox" value={item} onChange={handleChange} />
                {item}
              </label>
            ))}
          </div>

          <button type="submit">Submit Application</button>
          <p className="note">You will receive a confirmation email after submission</p>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
