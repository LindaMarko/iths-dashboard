import TheHeader from './components/Layout/TheHeader';
import TheWeather from './components/Weather/TheWeather';
import TheClock from './components/Clock/TheClock';
import TheNews from './components/News/TheNews';
import ClassSchedule from './components/Schedule/ClassSchedule';
import Values from './components/Values/Values';
import TheFooter from './components/Layout/TheFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <div className="wrapper">
        <main className="main">
          <TheClock />
          <ClassSchedule />
          {/* <Values /> */}
          <TheWeather />
          <TheNews />
        </main>
        <aside>
          <Values />
        </aside>
      </div>
      <TheFooter />
    </div>
  );
}

export default App;
