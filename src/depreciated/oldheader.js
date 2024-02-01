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
        <div className="frame">
            <div className = "sectionplate">
                <button className = "sectionbutton" onClick={switchToAboutPage} >About</button>
                <button className = "sectionbutton" onClick={switchtoProjects}>Projects</button>
                <button className = "sectionbutton" onClick={switchtoWorkingon}>Working On</button>
            </div>
            <div className= "socialsplate">
                <div className="emailplate">
                    <label className="email">Email Me @</label>
                    <a href="mailto:michael.s.dixon211@gmail.com">
                        <label className="email">michael.s.dixon211@gmail.com</label>
                    </a>
                </div>
                <button className="resumebutton" onClick={resumeDownload}></button>
                <a href="https://github.com/Dixon211" target="_blank" >
                    <button className = "githubbutton"></button>
                </a>
                <a href="https://www.linkedin.com/in/michael-dixon-2a0ba7b1/" target="_blank">
                    <button className = "linkedinbutton"></button>
                </a>
            </div>
        </div>
    );
}

export default Header;