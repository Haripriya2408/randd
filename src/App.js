import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="app">
      <header>
        <input type="checkbox" id="toggler" />
        <a href="#" className="logo">SONA R&D PORTAL</a>
        <nav className="navbar">
          <a href="#department">DEPARTMENTS &#x25BE;</a>
          <ul className="dropdown">
            <li><a href="#">CSE</a></li>
            <li><a href="#">EEE</a></li>
            <li><a href="#">ECE</a></li>
            <li><a href="#">MECH</a></li>
            <li><a href="#">AIML</a></li>
          </ul>
          <a href="#projects">PROJECTS</a>
          <a href="#funding">FUNDING</a>
          <a href="#publication">PUBLICATION</a>
          <a href="#mous">MOUS</a>
          <a href="#consultancy">CONSULTANCY</a>
          <a href="#startup">STARTUPS</a>
          <a href="#mr-john-doe">MR. JOHN DOE &#x25BE;</a>
        </nav>
      </header>

      <div className="container">
        <h1 className="heading">Profile</h1>
        <div className="video-container">
          <img src="" alt="profile" />
        </div>
        <div className="personal-info">
          <h2>Mr. John Doe</h2>
          <ul>
            <p>CSEJOH200S</p>
            <p>Professor</p>
          </ul>
        </div>
      </div>

      <div className="container2">
        <h1 className="heading">Notification</h1>
        <p>No Notification</p>
      </div>

      <div className="tabs-nav">
        <nav className="navbar1">
          <a href="#" className="tab" onClick={() => showTab('projects')}>PROJECTS</a>
          <a href="#funding" className="tab" onClick={() => showTab('funding')}>FUNDING</a>
          <a href="#publication" className="tab" onClick={() => showTab('publication')}>PUBLICATION</a>
          <a href="#mous" className="tab" onClick={() => showTab('mous')}>MOUS</a>
          <a href="#consultancy" className="tab" onClick={() => showTab('consultancy')}>CONSULTANCY</a>
          <a href="#startup" className="tab" onClick={() => showTab('patents')}>PATENTS</a>
        </nav>
      </div>

      <div className={`tab-content ${activeTab === 'projects' ? 'active' : ''}`} id="projects">
        <h1>Projects</h1>
        <p>Details about various projects.</p>
      </div>
      <div className={`tab-content ${activeTab === 'funding' ? 'active' : ''}`} id="funding">
        <h1>Funding</h1>
        <p>Information regarding funding opportunities and grants.</p>
      </div>
      <div className={`tab-content ${activeTab === 'publication' ? 'active' : ''}`} id="publication">
        <h1>Publications</h1>
        <p>List of published works and research articles.</p>
      </div>
      <div className={`tab-content ${activeTab === 'mous' ? 'active' : ''}`} id="mous">
        <h1>MOUs</h1>
        <p>Details on Memoranda of Understanding.</p>
      </div>
      <div className={`tab-content ${activeTab === 'consultancy' ? 'active' : ''}`} id="consultancy">
        <h1>Consultancy</h1>
        <p>Consultancy services offered and case studies.</p>
      </div>
      <div className={`tab-content ${activeTab === 'patents' ? 'active' : ''}`} id="patents">
        <h1>Patents</h1>
        <p>Information about patents filed and research innovations.</p>
      </div>

      <div className="container1">
        <p className="heading">Add R and D details</p>
        <div className="research-type">
          <ul>
            <li>+ Research Project</li>
            <li>+ Funding</li>
            <li>+ Publication</li>
            <li>+ Patent</li>
            <li>+ Conference/Workshops</li>
            <li>+ MOU & Collaboration</li>
            <li>+ Consultancy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
