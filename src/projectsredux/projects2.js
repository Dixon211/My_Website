import "./projects2.css";

function Project2  () {
    return(
        <div id="projectcontainer">
            <div className="projectsection">
                <div className="pthold">
                    <text className="ptitle">This Website</text>
                </div>
                <label className="pdesc">Tech Stack:</label>
                <div>
                    <ol className="techlist">JavaScript</ol>
                    <ol className="techlist">HTML & CSS</ol>
                    <ol className="techlist">React</ol>
                    <ol className="techlist">AWS</ol>
                </div>
                <p className="pdesc">
                I am so happy the site is finally online! It feels like a journey getting here as I had to learn so much to fully create this site. Having my own little slice of the internet feels so good. Originally the idea was a project to learn React since I knew a bit of Python and was feeling confident with my programming fundamentals, but I was humbled very quickly by web dev.<br/><br/>
                I started my journey with React and after reading a majority of the documentation and doing some simple components I really liked the idea. It felt like I was creating my own library of components to use later. I had a huge hurdle with understanding how to pass state and functions to components. There seemed to be 2 different ways and after way too much research I found it was changed but more than half of what was online was for the old way to do it which would throw errors in the new version. When I finally got something as simple as the state changing consistently, I was jumping for joy.<br/><br/>
                Within this of course I had to learn HTML and CSS and while they are conceptually easy but the devil is in the details. I learned some key ideas quickly like flex box but my implementation was terrible, mostly because I tried making a one-size fits all site and of course most people were checking it out on mobile where the desktop formatting looked awful. I had to laugh the first time someone checked it out and all the boxes were overlapping. I truly learned that day the feeling of “well it looked good on my machine.” Thankfully my friends steered my in the right direction with creating mobile queries using the @media CSS tags and using better units such as vh, vw, rem for components.<br/><br/>
                All the time I was creating the frontend for the site I was told some of the more complicated part was getting the site deployed. I’m thankfully that my IT background made this fairly easy and allowed me time to polish up on DNS,DNS certs, and use more Amazon Web Service. The S3 buckets were easy enough to understand but I hit a major roadblock after moving my domain to AWS Route 53 where a wire was crossed and the site was redirecting to mikedixon.org (no relation). Eventually I found it was an issue with the documentation after changing domain registrars and contacted Amazon support to get that changed as I don’t like to contact support if its something I can fix myself. <br/><br/>
                I am very proud of this basic site. I think the biggest lesson is success cannot happen without failure. This version you are seeing is the third pass and the first 2 were very rough, but they let myself know I could do it. Breaking down the problems into smaller pieces, being able to admit that a way I had done a page was not great and trying out new tools and half way through realizing the tool doesn’t do what you wanted it to do are all parts of the process. My next steps for the site is to make it multipage and to host some webapps with a backend and I am currently eyeing flask so I can get back to some Python goodness. Please let me know if you have any suggestions or ideas by emailing me from my contacts. <br/><br/>
                </p>
            </div>
            <div className="projectsection">
                <div className="pthold">
                    <text className="ptitle">Ticketing System Extension</text>
                </div>
                <label className="pdesc">Tech Stack:</label>
                <div>
                    <ol className="techlist">JavaScript</ol>
                    <ol className="techlist">Python</ol>
                    <ol className="techlist">HTTPS</ol>
                </div>
                <p className="pdesc">
                This one was a project I did to help me with my work. I was at a company that was on an old depreciated version of Spiceworks. The biggest issue day to day for people on the desk was when a ticket came in we had to go to the company site, go to the section based on the company, then get there name, computer, email, and company code. After all this we could finally start working on the ticket. It took forever and with how many times a day we had to do this I decided it would be best to just fix it myself.<br/><br/>
                The first part was getting the data from the website. I had learned some web scrapping with Python but the hurdle was I had never tried to access a system that required credentials before, just public facing websites. Thankfully I knew from my IT experience that passing authentication cookies to sessions requests would fix this issue once I knew what data the authentication server needed. I used Chrome’s Devtools to check the packets when I logged onto the website then took that information and allowed my web scrapping program to do it. The next challenge was getting the data out of the tables on the website. Both the tables and the layout of certain client specific pages were not uniform so I had to do some tricks for data cleanup and finding the table, but ultimately in a few hours I was able to get all that data formatted into a coherent JSON file. <br/><br/>
                Now I had to create the actual extension. I chose JavaScript as it more easily interfaces with HTML and frontend. I will say this was the first time I had seen how the DOM talks to each other. I think the best way I could describe it was like old time radio operators. Where my extension would listen for broadcasts from the browser and then do what I needed based on these requirements. I settled on only allowing my extension to work on our ticketing page and it used the email to query the JSON file to get the correct information and update the ticket, when an “edit” element was pressed.I was very happy to have this working for about 98% of the clients and the JSON file could be updated whenever we had a new client without any changes. <br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Project2;