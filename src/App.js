import './App.css';
import SvgIdeas from './Ideas.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Inspired</h1>
        <p>Do the work you want to do.</p>
      </header>
      <div className='vector'>
        <SvgIdeas></SvgIdeas>
      </div>
      <footer className="App-footer">
        <p>We have concluded</p>
      </footer>
    </div>
  );
}

export default App;
