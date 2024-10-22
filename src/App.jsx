import React from 'react';
import './App.css'; 
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';

function App() {
  
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
      
    </div>
  );
}

export default App;


