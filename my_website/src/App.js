import './App.css';
import headshot from './headshot.jpg';

function App() {
  return (
    <div className='main'>
      <div className='left'>
        <img className='headshot' src={headshot} />
        <div className='description_div'>
          <label className="name">Michael Dixon</label>
          <label className='description'>It Professional, Coding Enthusiast, Part-time Wizard</label>
        </div>
        <div className='btndiv'>
          
        </div>
      </div>
      <div className='right'>

      </div>
    </div>
  );
}

export default App;
