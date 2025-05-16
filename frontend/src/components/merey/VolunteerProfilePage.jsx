import React from "react";
import "./VolunteerProfilePage.css";
import { Link } from "react-router-dom";


const VolunteerProfilePage = () => {
  return (
    <>
    <header className="top-bar">
  <div className="logo">VolunBee</div>
  <nav>
    <Link to="/" className="nav-link">Application</Link>
    <Link to="/create" className="nav-link">Create Event</Link>
    <Link to="/profile" className="nav-link">My Profile</Link>
    <span className="nav-link">About</span>
  </nav>
</header>


    <div className="profile-page">
      <div className="profile-card">
        <div className="sidebar">
          <div className="avatar"></div>
          <div className="badge gold">Gold</div>
          <div className="rating">4.8</div>
          <div className="stat-box">
            <strong>150</strong>
            <span>Hours</span>
          </div>
          <div className="stat-box">
            <strong>12</strong>
            <span>Events</span>
          </div>
        </div>

        <div className="profile-main">
          <h2>Assel Aspandiyar</h2>
          <p className="major">Environmental Science Major</p>
          <div className="tags">
            <span>Environmental</span>
            <span>Education</span>
            <span>Community</span>
          </div>

          <h4>About Me</h4>
          <p className="about-text">
            "Volunteering has given me the opportunity to make a real difference
            while meeting amazing people. I’m passionate about environmental
            conservation and education, and love helping others learn about
            sustainability."
          </p>

          <h4>Recent Activities</h4>
          <div className="activity">
            <div>
              <strong>Beach Cleanup Drive</strong>
              <p>Led a team of 20 volunteers • 5 hours</p>
            </div>
            <span>Last week</span>
          </div>

          <div className="activity">
            <div>
              <strong>Youth Mentoring Program</strong>
              <p>Mentored high school students • 3 hours</p>
            </div>
            <span>2 weeks ago</span>
          </div>

          <div className="activity">
            <div>
              <strong>Food Bank Distribution</strong>
              <p>Helped distribute meals • 4 hours</p>
            </div>
            <span>3 weeks ago</span>
          </div>

          <h4>Achievements</h4>
          <div className="badges">
            <div className="badge-box yellow">
              <span>Top Volunteer</span>
              <small>March 2024</small>
            </div>
            <div className="badge-box purple">
              <span>100 Hours Club</span>
              <small>Achievement Unlocked</small>
            </div>
          </div>

          <h4>Upcoming Events</h4>
          <div className="events">
            <div className="event-card">
              <strong>Earth Day Festival</strong>
              <p>April 22, 2024 • 10:00 AM</p>
              <span className="event-tag">Environmental</span>
            </div>
            <div className="event-card">
              <strong>Library Reading Program</strong>
              <p>April 25, 2024 • 2:00 PM</p>
              <span className="event-tag">Education</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VolunteerProfilePage;
