import "./header.css";

function Header({switchToAboutPage, switchtoProjects, switchtoWorkingon, toggleMmExpand}) {

    return(
        <div id="headerframe">
            <div id="mylogo">
                <img src="/Flag_of_Maryland.svg" alt="logo"></img>
            </div>
            <div id = "sectionplate">
                <button id="ambtn" className = "sectionbutton" onClick={switchToAboutPage}>
                    <label  className= 'hbtxt'>About Me</label>
                </button>
                <button id="pbtn" className = "sectionbutton" onClick={switchtoProjects}>
                    <label className= 'hbtxt'>Projects</label>
                </button>
                <button id="csbtn" className = "sectionbutton" onClick={switchtoWorkingon}>
                    <label className= 'hbtxt'>Coming Soon</label>
                </button>
                <button id="hhambtn" onClick={toggleMmExpand}>
                    <img src="hamburger.png" alt="menu"/>
                </button>
            </div>
        </div>
    );

}

export default Header;