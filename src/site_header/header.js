import "./header.css";

function Header({switchToAboutPage, switchtoProjects, switchtoWorkingon}) {
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
        <div id="headerframe">
            <div className = "sectionplate">
                <button className = "sectionbutton" onClick={switchToAboutPage} >About</button>
                <button className = "sectionbutton" onClick={switchtoProjects}>Projects</button>
                <button className = "sectionbutton" onClick={switchtoWorkingon}>Working On</button>
            </div>
        </div>
    );
}

export default Header;