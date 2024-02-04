import "./header.css";

function Header({switchToAboutPage, switchtoProjects, switchtoWorkingon}) {



    return(
        <div id="headerframe">
            <div id="mylogo">
                <img src="/Flag_of_Maryland.svg"></img>
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
                <div id="hammenu">
                    <button onClick={expanddropdown} id="hambtn">
                        <img src="/hamburger.png" />
                    </button>
                    <div id="hdrop" className="hdropcontent">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;