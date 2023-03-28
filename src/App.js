import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          <Weather city="Paris"/>
        </h1>
        
      </header>
    </div>
  );
}

export default App;
