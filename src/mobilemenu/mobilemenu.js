import "./mobilemenu.css";
function Mobilemenu ({mmexpand}) {


    return(
        <div id="mobilemenu" className={mmexpand ? 'open':'closed'}>
            <div id="mmheader">
                
            </div>
        </div>
    );
}

export default Mobilemenu;