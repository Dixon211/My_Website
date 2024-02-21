import "./aboutPage.css"
import Mountain from "./me.png"

function AboutPage() {
    return(
        <div id="aboutcontainer">
            <div className= "detailsplate">
                <div className="text">
                    <label className="largefont">Hi, I'm Michael Dixon<br/> A Computer and Networking Enthusiast</label>
                    <label className="smalltext">I'm a self-taught IT Professional and Full Stack Software Engineer<br/>My stack: Python, Javascript, Github, HTML, CSS, and working on C++</label>
                </div>
            </div>
            <div className="imagesection">
                <img className="mountains" src={Mountain} alt = "mountains" />
            </div>
        </div>
        
    );
}

export default AboutPage;