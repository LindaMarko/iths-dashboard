import { useEffect, useState } from 'react';

import TheHeader from './components/Layout/TheHeader';
import TheWeather from './components/Weather/TheWeather';
import TheClock from './components/Clock/TheClock';
import TheNews from './components/News/TheNews';
import ClassSchedule from './components/Schedule/ClassSchedule';
import Values from './components/Values/Values';
import TheFooter from './components/Layout/TheFooter';
import './App.css';

function App() {
  const [onlineState, setOnlineState] = useState(true);

  useEffect(() => {
    const showOffline = () => {
      console.log('Going offline');
      setOnlineState(false);
    };

    window.addEventListener('offline', showOffline);

    return () => {
      window.removeEventListener('offline', showOffline);
    };
  }, []);

  return (
    <div className="App">
      <TheHeader onlineState={onlineState} />
      <div className="wrapper">
        <main className="main">
          <section className="first-section">
            <TheClock />
            <TheWeather />
          </section>
          <section className="second-section">
            <ClassSchedule />
            <TheNews />
          </section>
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
