import "./projectspage.css";


function Projects () {
    return(
        <div>
            <div className = "projectsection">
                <div className = "textsection">
                    <label className="projecttitle">Stock Trading Bot</label>
                    <p className="projectdetails">The stock trading bot was one of my first projects that I worked on with my friend Julian Loiacono who really helped me get my footing as a new programmer. While I came up with the overall structure of the project such as using classes to keep all the stocks compartmentalized and able to trade individually based on the algorithm we gave it, it was Julian who helped me learn about how to effectively use APIs, modules, and setup my environment.</p>
                    <p className="projectdetails">We used the unofficial Robinhood API as it was accessible and most importantly free. The parameters set were that we would only trade top 100, we were using a buy-low, sell-high approach for short-term selling, and we did not want to have any stocks in our portfolio at EoD. Sadly this approach was good for using constraints we had a time bypassing Robinhood anti-bot measures and also concluded trying to use stock prices to predict stock prices was a fool’s errand.</p>
                    <p className="projectdetails">This project was a great starting point for both my coding career and my studies into data science and machine learning as I want to make a long term bot that scrapes headlines and stock data to use location data, sentiment, and stock price adjustment to predict stock prices in the future with a neural network. My current tool I am learning for this is tensorflow.</p>
                </div>
                <div className = "skillssection">
                    <label className="skillstitle">Skills Used</label>
                    <div className ='skillslist'>
                        <ul>
                            <li>Python</li>
                            <li>API calls</li>
                            <li>Class usage</li>
                            <li>Github</li>
                            <li>Team Collaboration</li>
                            <li>data management</li>
                            <li>dotenv</li>
                        </ul>
                        <a href="https://github.com/Dixon211/AutoATM/blob/main/SinTest/auto_bot_%CE%98.ipynb" target="_blank">
                        <label className="projectlink">link to stock trading bot</label>
                        </a>
                    </div>
                </div>
            </div>
            <div className = "projectsection">
                <div className = "textsection">
                    <label className="projecttitle">Ticketing System Autofiller</label>
                    <p className="projectdetails">At one one of my jobs we were on a deprecated version of spiceworks that created tickets from emails sent in. The tickets would only come with the client’s email field filled and we would be tasked with filling in the user’s name field and changing the ticket name to include their company identifier. Which required us to memorize +1000 users or go to the company portal to search for who sent the email as rarely did users have a signature.</p>
                    <p className="projectdetails">The first part of this project was creating the database, which I did with python as I am more familiar with web scraping with it. The hard part was making sure my program could login to the company portal which I did by creating a session, checking what information was sent to the server when we logged in, having my program send a packet with that information on the sign-in page, then storing the cookies in the response, after that my session was authenticated and could freely scrape the +100 client pages we had. I then placed that information into a JSON file with the correct JSON formatting after some data cleanup as the site was not uniform. Glad my Network+ was coming in handy.</p>
                    <p className="projectdetails">The second part of the project was done in javascript to create a chromium web extension. I had the web extension active on our ticketing url only and it would scan for when the ticket “edit” element was activated. It would then scan through the database for the information based on the email that was displayed on the page from the ticket coming in. It filled in the user’s information and edited the title if it did not already have a hyphen to stop it from trying to overwrite tickets if you needed to edit something down the line. If it did have a hyphen in the title, just remove it and save and then reopen it. This turned tickets into a 1-button press with only tickets sent from personal emails requiring us to work them the old way.</p>
                    <p className="projectdetails">Lastly, I wanted some templates for when the ticket was ready to be worked for the real issue the client contacted us about. I created a second web extension that created a new option when you right-clicked in a text-field. This would bring up a sub-menu of a few predone messages letting the user know we were working on the ticket which would also reference the system clock to change the greeting to the appropriate time of day. Filling in tickets went from being burdensome to being 2 clicks and I could actually focus on the IT needs of the client.</p>
                </div>
                <div className = "skillssection">
                    <label className="skillstitle">Skills Used</label>
                    <div className ='skillslist'>
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>HTTPS requests</li>
                            <li>Web scraping</li>
                            <li>JSON</li>
                            <li>Automation</li>
                            <li>Backend</li>
                            <li>Github</li>
                            <li>Web extensions</li>
                            <li>HTML & CSS</li>
                            <li>dotenv</li>
                        </ul>
                        <a href="https://github.com/Dixon211/Work_automation" target="_blank">
                        <label className="projectlink">link to Ticket Autofiller </label>
                        </a>
                    </div>
                </div>
            </div>
            <div className = "projectsection">
                <div className = "textsection">
                    <label className="projecttitle">This Website</label>
                    <p className="projectdetails">I had avoided it for a while as I much prefer the backend. The feeling of running your program and it spitting out what you need feels like some prime wizard material. However, the frontend is where everyone else lives. So I decided to take the plunge and make this website. It’s built in React which made the process so much easier. </p>
                    <p className="projectdetails">I learned from my peers and friends at Baltimore Code and Coffee that many find the layout of React to be a little hard to understand, specifically with the importing of elements. I think this is where my python experience really helped as I am big on importing modules or other code I’ve done before into newer projects. Why recreate the wheel every time?</p>
                    <p className="projectdetails">My biggest challenge here was actually the layout. I am no artist and having to pick the colors, make it not look completely ugly, and sticking with a theme was a challenge as I am a very function over form person. It was fun to learn some photo editing tricks for the icons and for my picture on the about page. I’m going to keep updating the site and I hope you come back to see it.</p>
                </div>
                <div className = "skillssection">
                    <label className="skillstitle">Skills Used</label>
                    <div className ='skillslist'>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Node.JS</li>
                            <li>HTML & CSS</li>
                            <li>Photo editing</li>
                            <li>Frontend</li>
                        </ul>
                        <a href="https://github.com/Dixon211/Work_automation" target="_blank">
                        <label className="projectlink">link to the code</label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
    );
}

export default Projects;