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
    <div id="main">
      <HangingSidebar/>
      <Mobilemenu mmexpand={mmexpand}
      toggleMmExpand = {toggleMmExpand}
      switchToAboutPage={handleSwitchToAboutPage}
      switchtoProjects={handleSwitchToProjects}
      switchtoWorkingon={handleSwitchtoWork}/>
      <Header 
        toggleMmExpand = {toggleMmExpand}
        switchToAboutPage={handleSwitchToAboutPage}
        switchtoProjects={handleSwitchToProjects}
        switchtoWorkingon={handleSwitchtoWork}
      />
      
      <div id="Section">
        {ActivePanel}
      </div>
    </div>
  );
}

export default App;
