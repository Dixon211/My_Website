import './App.css';
import AboutMeSection from './About_me_section.js';
import SidebarSection from './Sidebar.js';





function App() {
    
  
  return (
    <div className='main'>
        <SidebarSection />
      <div className='right'>
        <AboutMeSection />
      </div>
    </div>
  );
}

export default App;
