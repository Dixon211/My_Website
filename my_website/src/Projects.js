import './App.css'
import Project_info from './About_me.json';

function Project_Section(){
    return(
        <div className='Project_Background'>
            <div className='Current_Project_header'>
                <label className='Current_Project_label'>Stock Trading Bot</label>
            </div>
            <div className='Current_project_div'>
                <p className='project_desc'>{Project_info.stock_bot_desc_1}</p>
            </div>
            <div className='list_div'>
            <label className='project_desc'>Edge Cases/Solutions</label>
            <ol className='project_desc'>
                <li>Stock drops out of top 100: This one was simple, just check the incoming data’s stock symbols and if it isn’t there trigger a sell command as it must have gone down.</li>
                <br />
                <li>Bot was selling on any drop in value: Implemented data gathering so that it wouldn’t make a purchase until 5 ticks of data. Added the data to a list and popped it if the list was longer than 5. Allowed the bot to check if there was a more stable increase before buy and had a separate list for 3 ticks for selling.</li>
                <br />
                <li>Too many stocks going up relative to money in pool: configured algorithm to only take stocks going up by a certain percentage amount that was dependent on the average price of the stock. So stocks about $100 needed less percentage than stocks below $50.</li>
                <br />
                <li>Testing in real time: I spent a few days collecting a data set and putting it into a SQL database. I configured the program to test on this data without time restrictions.</li>
            </ol>
            </div>
            <div className='Current_project_div'>
                <p className='project_desc'>{Project_info.stock_bot_desc_2}</p>
            </div>
        </div>
    );
}

export default Project_Section