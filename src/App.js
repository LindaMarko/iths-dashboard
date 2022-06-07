import TheWeather from './components/Weather/TheWeather';
import TheClock from './components/Clock/TheClock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <TheWeather />
      <TheClock />
    </div>
  );
}

export default App;
