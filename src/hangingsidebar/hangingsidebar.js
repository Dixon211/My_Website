import "./hangingsidebar.css";
import useWindowSize from '../webhooks/useWindowSize/useWindowSize';
import {useState} from "react";


function HangingSidebar () {
    //state, statechange
    const [isExpanded, setisExpanded] = useState(false);
    const toggleisExpanded = () => {
        setisExpanded(!isExpanded);
    }
    //functions
    const resumeDownload = () => {
        const resumeurl= "/MikeDixon.pdf";
        const link = document.createElement("a");
        link.href=resumeurl;
        link.download ="MikeDixon.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return(
        <div id='sbcont' className={isExpanded ? 'open': 'closed'}>
            <button id='handle' className={isExpanded ? 'open': 'closed'} onClick={toggleisExpanded}>
                <label id="handletxt">Contacts</label>
            </button>
            <div id='drawer' className={isExpanded ? 'open': 'closed'}>
                <a className="draweratag" href='#'>
                    <button className="drawerbutton" onClick={resumeDownload}>
                        <img src="/resume.png" />
                    </button>
                </a>
                <a className="draweratag" href="mailto:michael.s.dixon211@gmail.com">
                    <button className="drawerbutton">
                        <img src="/emailicon.png" />
                    </button>
                </a>
                <a className="draweratag" href="https://github.com/Dixon211" target="_blank" >
                    <button className="drawerbutton">
                        <img src="/github-mark.png" />
                    </button>
                </a>
                <a className="draweratag" href="https://www.linkedin.com/in/michael-dixon-2a0ba7b1/" target="_blank">
                    <button className="drawerbutton">
                        <img src='/linkedin-logo.png' />
                    </button>
                </a>

            </div>
        </div>
    )

}

export default HangingSidebar;