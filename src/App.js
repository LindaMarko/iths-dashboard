import TheHeader from './components/Layout/TheHeader';
import TheWeather from './components/Weather/TheWeather';
import TheClock from './components/Clock/TheClock';
import ClassSchedule from './components/Schedule/ClassSchedule';
import Values from './components/Values/Values';
import TheFooter from './components/Layout/TheFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <main className="main">
        <TheClock />
        <ClassSchedule />

        <TheWeather />
      </main>
      <aside>
        <Values />
      </aside>
      <TheFooter />
    </div>
  );
}

export default App;
