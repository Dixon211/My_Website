import about_me from './About_me.json';




function about_me_section(){
  
  return(
    <div className="about_me_background">
      <div className="about_me_header">
        <label className= "about_me_label">My Coding Journey</label>
      </div>
      <p className="about_me_p">
        {about_me.first_p}
        <br />
        <br />
        {about_me.second_p}
        <br />
        <br />
        {about_me.third_p}
      </p>
      <div className="about_me_header">
      <label className= "about_me_label">My Interest</label>
      </div>
      <p className="about_me_p">
        {about_me.magic_p}
        <br />
        <br />
        {about_me.vg_p}
        <br />
        <br />
        {about_me.startrek_p}
      </p>
    </div>
  );
}

export default about_me_section