import './App.css';
import Header from './site_header/header';
import AboutPage from "./aboutPage/aboutPage";
import Projects from './projects/projectspage';
import Workingon from './workingon/workingon';
import HangingSidebar from './hangingsidebar/hangingsidebar';
import { useState} from 'react';


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
    <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
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
    </div>


  
 
  );
}

export default App;
