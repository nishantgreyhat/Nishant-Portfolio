import React, { useState, useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Loading from "./components/Loading"; // Import Loading component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500); // Change this value to control loading time (5000ms = 5 seconds)
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactsSection />
        </>
      )}
    </div>
  );
}

export default App;
