import './App.css';
import Header from './site_header/header';
import AboutPage from "./aboutPage/aboutPage";
import Projects from './projects/projectspage';
import Workingon from './workingon/workingon';
import HangingSidebar from './hangingsidebar/hangingsidebar';
import { useState, useEffect, createContext, useContext } from 'react';


//Main
function App() {
  //global variables
  const [ActivePanel, setCurrentSection] = useState(<AboutPage />);

  //functions
  const handleSwitchToAboutPage = () => {
    setCurrentSection(<AboutPage />);
  };

  const handleSwitchToProjects = () => {
    setCurrentSection(<Projects />);
  };

  const handleSwitchtoWork = () => {
    setCurrentSection(<Workingon/>)
  };

  //html/css
  return (
    <body>
      <HangingSidebar/>
      <Header 
        switchToAboutPage={handleSwitchToAboutPage}
        switchtoProjects={handleSwitchToProjects}
        switchtoWorkingon={handleSwitchtoWork}
      />
      
      <div className="Section">
        {ActivePanel}
      </div>
      
    </body>

  
 
  );
}

export default App;
