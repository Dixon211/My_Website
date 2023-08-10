import './App.css';
import headshot from './headshot.jpg';

function App() {
  return (
    <div className='main'>
      <div className='left'>
        <img className='headshot' src={headshot} />
        <div className='description_div'>
          <label className='description'>It Professional, Coding Enthusiast, Part-time Wizard</label>
        </div>
      </div>
      <div className='right'>

      </div>
    </div>
  );
}

export default App;
