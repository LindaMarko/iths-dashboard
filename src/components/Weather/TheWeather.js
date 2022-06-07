import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import styles from './TheWeather.module.css';

const TheWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=147b874875d53e0e9f84cbacd0567b99'
      );

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const resData = await res.json();

      console.log(resData);
      setWeatherData(resData);
      setIsLoading(false);
    };

    fetchWeather().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.WheatherLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.WeatherError}>
        <p>{httpError}</p>
      </section>
    );
  }

  // Sunrise and sunset data
  const sunriseConvert = new Date(weatherData.sys.sunrise * 1000);
  const sunriseTime = sunriseConvert.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const sunsetConvert = new Date(weatherData.sys.sunset * 1000);
  const sunsetTime = sunsetConvert.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card>
      <section>
        <h1>Today's Weather</h1>
        <h2>{weatherData.name}</h2>
        <p>{weatherData.weather[0].description}</p>
        <h2>{weatherData.main.temp.toFixed(1)}°C</h2>
        <p>Feels like: {weatherData.main.feels_like.toFixed(1)}°C </p>
        <img
          width="150"
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt=""
        />
        <div>
          <p>Sunrise: {sunriseTime}</p>
          <p>Sunset: {sunsetTime}</p>
        </div>
      </section>
    </Card>
  );
};

export default TheWeather;
