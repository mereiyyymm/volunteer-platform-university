import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationForm from "./components/merey/ApplicationForm";
import VolunteerProfilePage from "./components/merey/VolunteerProfilePage";
import CreateEvent from "./components/merey/CreateEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicationForm />} />
        <Route path="/profile" element={<VolunteerProfilePage />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
