import "./hangingsidebar.css";
import useWindowSize from '../webhooks/useWindowSize/useWindowSize';
import {useState} from "react";


function HangingSidebar () {
    //SUCCESS!!!
    //webhooks
    const windowSize = useWindowSize();
    //state, statechange
    const [isExpanded, setisExpanded] = useState(false);
    const toggleisExpanded = () => {
        setisExpanded(!isExpanded);
    }


    return(
        <div id="border" className={isExpanded ? 'open':'closed'} style={isExpanded ? {top: windowSize.height/3, height: windowSize.height/5, width:(windowSize.width/10)}:{top: windowSize.height/3, height: windowSize.height/5}}>
            <btn id="handle" className={isExpanded ? 'open':'closed'} style={isExpanded ? {width:windowSize.width/30}: {width:windowSize.width/30}} onClick={toggleisExpanded}>Press</btn>
            <div id="drawer" className={isExpanded ? 'open':'closed'}>

            </div>
        </div>
    )

}

export default HangingSidebar;