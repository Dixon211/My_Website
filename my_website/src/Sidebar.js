import './App.css'
import headshot from './headshot.jpg';
import git_hub from './git_hub_logo.png';
import linkedin from './linkedin.png';


function sidebar() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
return(
<div className='left'>
        <img className='headshot' src={headshot} />
        <div className='description_div'>
          <label className="name">Michael Dixon</label>
          <label className='description'>It Professional, Coding Enthusiast, Part-time Wizard</label>
          <label className='mystack'>Python, Javascript, React, CSS, HTML</label>
          <br />
          <div className='sb_btn_div'>
            <button className='sb_btn'>About Me</button>
            <button className='sb_btn'>Resume</button>
            <button className='sb_btn'>Projects</button>
          </div>
          <div className='socials'>
            <button className='social_btn'>
              <img onClick={() => openInNewTab("https://github.com/Dixon211")} src={git_hub} className='social_pic' />
            </button>
            <button className='social_btn'>
                <img onClick={() => openInNewTab("https://www.linkedin.com/in/michael-dixon-2a0ba7b1/")} src={linkedin} className='social_pic' />
            </button>
            <div className='vert_flexbox'>
                <label className='email'>301-448-0220</label>
                <label className='email'>michael.s.dixon211@gmail.com</label>
            </div>
          </div>
        </div>
        <div className='btndiv'>
        
        </div>
      </div>
    );
}

export default sidebar;