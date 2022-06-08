import TheHeader from './components/TheHeader';
import TheWeather from './components/Weather/TheWeather';
import TheClock from './components/Clock/TheClock';
import './App.css';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <main className="main">
        <TheWeather />
        <TheClock />
      </main>
    </div>
  );
}

export default App;
