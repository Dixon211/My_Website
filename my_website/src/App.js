import './App.css';
import AboutMeSection from './About_me_section.js';
import SidebarSection from './Sidebar.js';
import ResumeSection from './Resume.js';





function App() {
    
  
  return (
    <div className='main'>
        <SidebarSection />
      <div className='right'>
        <ResumeSection/>
      </div>
    </div>
  );
}

export default App;
