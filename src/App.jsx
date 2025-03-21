import React from 'react';
import './App.css'; 
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';

function App() {
  
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      
    </div>
  );
}

export default App;


