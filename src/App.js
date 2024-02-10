import './App.css';
import Header from './site_header/header';
import AboutPage from "./aboutPage/aboutPage";
import Projects from './projects/projectspage';
import Workingon from './workingon/workingon';
import HangingSidebar from './hangingsidebar/hangingsidebar';
import Mobilemenu from './mobilemenu/mobilemenu';
import { useState} from 'react';


//Main
function App() {
  //states
  const [ActivePanel, setCurrentSection] = useState(<AboutPage />);
  const [mmexpand, setMmExpand] = useState(false);
 

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

  const toggleMmExpand = () => {
    setMmExpand(!mmexpand);
  };

  //html/css
  return (
    <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <HangingSidebar/>
      <Mobilemenu mmexpand={mmexpand}/>
      <Header 
        toggleMmExpand = {toggleMmExpand}
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
