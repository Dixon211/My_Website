import "./header.css";

function Header({switchToAboutPage, switchtoProjects, switchtoWorkingon}) {


    return(
        <div id="headerframe">
            <div id = "sectionplate">
                <button className = "sectionbutton" onClick={switchToAboutPage}>
                    <label className= 'hbtxt'>About Me</label>
                </button>
                <button className = "sectionbutton" onClick={switchtoProjects}>
                    <label className= 'hbtxt'>Projects</label>
                </button>
                <button className = "sectionbutton" onClick={switchtoWorkingon}>
                    <label className= 'hbtxt'>Coming Soon</label>
                </button>
            </div>
        </div>
    );

}

export default Header;