import "./mobilemenu.css";
function Mobilemenu ({mmexpand, toggleMmExpand, switchToAboutPage, switchtoProjects, switchtoWorkingon}) {
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
        <div id="mobilemenu" className={mmexpand ? 'open':'closed'}>
            <div id="mmheader">
                <button id="mmbtn" onClick={toggleMmExpand}>
                    <img src="hamburger.png" alt="menu"/>
                </button>
            </div>
                <button className="mmsecbtn" onClick={switchToAboutPage}>
                    About Me
                </button>
                <button className="mmsecbtn" onClick={switchtoProjects}>
                    Projects
                </button>
                <button className="mmsecbtn" onClick={switchtoWorkingon}>
                    Coming Soon
                </button>
                <label id="mmlabel">Socials</label>
                <div id="mmsocials">
                    <a  href='#'>
                        <button id="mmrsmbtn" className="mmsclbtn" onClick={resumeDownload}>
                            <img src="/resume.png" />
                        </button>
                    </a>
                    <a  href="mailto:michaeldixon@michaeldixon.org">
                        <button id="mmemail" className="mmsclbtn">
                            <img src="/emailicon.png" />
                        </button>
                    </a>
                    <a  href="https://github.com/Dixon211" target="_blank" >
                        <button id="mmgit" className="mmsclbtn">
                            <img src="/github-mark.png" />
                        </button>
                    </a>
                    <a  href="https://www.linkedin.com/in/michael-dixon-2a0ba7b1/" target="_blank">
                        <button id="mmlinked" className="mmsclbtn">
                            <img src='/linkedin-logo.png' />
                        </button>
                    </a>
                </div>
        </div>
    );
}

export default Mobilemenu;