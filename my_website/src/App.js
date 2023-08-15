import './App.css';
import AboutMeSection from './About_me_section.js';
import SidebarSection from './Sidebar.js';
import ResumeSection from './Resume.js';
import ProjectSection from './Projects.js';
import { useState } from "react";





function App() {
  const [currentSection, setCurrentSection] = useState(<ResumeSection />);

  const handleSwitchToResume = () => {
    setCurrentSection(<ResumeSection />);
  };

  const handleSwitchToAboutMe = () => {
    setCurrentSection(<AboutMeSection />);
  };
  const handleSwitchToProjects= () =>{
    setCurrentSection(<ProjectSection />);
  };
  
  return (
    <div className='main'>
        <SidebarSection
        switchToResume={handleSwitchToResume}
        switchToAboutMe={handleSwitchToAboutMe}
        switchToProjects={handleSwitchToProjects} />
      <div className='right'>
        {currentSection}
      </div>
    </div>
  );
}

export default App;
