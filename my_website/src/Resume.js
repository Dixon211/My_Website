import './App.css';
import resume_text from './About_me.json';

function Resume_section() {
    return(
    <div className='resume_background'>
        <div className='resume_entry'>
            <div className='resume_header_background'>
                <label className='resume_label'>Shipshape IT</label>
                <label className='resume_sublabel'>Tier 2 Helpdesk/Network Admin</label>
            </div>
            <div className='resume_body'>
                <label className='resume_info'>Duration: November 2022 - Current</label>
                <br />
                <label className='resume_info'>Location: Kensington, MD/Remote</label>
                <p>{resume_text.Shipshape_desc}</p>
            </div>
            <div className='skills_section'>
                <div className='skills_header'>
                    <label className='skills_label'>Skills learned:</label>
            </div>
            <div className='skills_header'>
                <ul className='skills_list'>
                    <li>AD/Azure AD admin</li>
                    <li>Mailflow Control</li>
                    <li>Powershell</li>
                    <li>Firewall Configuration</li>
                    <li>Python</li>
                    <li>Javascript, CSS, HTML</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
        <div className='resume_entry'>
            <div className='resume_header_background'>
                <label className='resume_label'>Food and Drug Administration Contractor(Apex Systems and Symposit LLC)</label>
                <label className='resume_sublabel'>Tier 1 Helpdesk/Computer Refresh</label>
            </div>
            <div className='resume_body'>
                <label className='resume_info'>Duration: March 2020 - November 2022</label>
                <br />
                <label className='resume_info'>Location: Kensington, MD</label>
                <p>{resume_text.FDA_desc}</p>
            </div>
            <div className='skills_section'>
                <div className='skills_header'>
                    <label className='skills_label'>Skills learned:</label>
                </div>
                <div className='skills_header'>
                    <ul className='skills_list'>
                        <li>Local Machine Troubleshooting</li>
                        <li>Email Quarantine</li>
                        <li>Office365</li>
                        <li>User Management</li>
                        <li>Password Mangement</li>
                        <li>VPN/Network Troubleshooting</li>
                        <li>Mac Troubleshooting</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='resume_entry'>
            <div className='resume_header_background'>
                <label className='resume_label'>EF English First</label>
                <label className='resume_sublabel'>English Teacher</label>
            </div>
            <div className='resume_body'>
                <label className='resume_info'>Duration: March 2018 - March 2019</label>
                <br />
                <label className='resume_info'>Location: Suzhou, China</label>
                <p>{resume_text.EF_desc}</p>
            </div>
            <div className='skills_section'>
                    <div className='skills_header'>
                        <label className='skills_label'>Skills learned:</label>
                    </div>
                    <div className='skills_list_div'>
                        <ul className='skills_list'>
                            <li>Teacher Scaffolding</li>
                            <li>Teaching Strategies</li>
                            <li>Presentation Skills</li>
                            <li>Lesson Planning</li>
                            <li>Concept Breakdown</li>
                            <li>Teaching Assessments</li>
                            <li>Event Hosting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Resume_section