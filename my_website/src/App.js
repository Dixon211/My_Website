import './App.css';
import AboutMeSection from './About_me_section.js';
import SidebarSection from './Sidebar.js';
import ResumeSection from './Resume.js';
import ProjectSection from './Projects.js';





function App() {
    
  
  return (
    <div className='main'>
        <SidebarSection />
      <div className='right'>
        <ProjectSection/>
      </div>
    </div>
  );
}

export default App;
