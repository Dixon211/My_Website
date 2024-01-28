import './App.css';
import Header from './site_header/header';
import AboutPage from "./aboutPage/aboutPage";
import Footer from "./footer/footer";
import Projects from './projects/projectspage';
import Workingon from './workingon/workingon';
import { useState } from 'react';

function App() {
  const [ActivePanel, setCurrentSection] = useState(<AboutPage />);

  const handleSwitchToAboutPage = () => {
    setCurrentSection(<AboutPage />);
  };

  const handleSwitchToProjects = () => {
    setCurrentSection(<Projects />);
  };

  const handleSwitchtoWork = () => {
    setCurrentSection(<Workingon/>)
  };
  return (
  <body>
    <Header 
      switchToAboutPage={handleSwitchToAboutPage}
      switchtoProjects={handleSwitchToProjects}
      switchtoWorkingon={handleSwitchtoWork}
    />
    <div className="Section">
      {ActivePanel}
    </div>
    <Footer />
  </body>
  
 
  );
}

export default App;
