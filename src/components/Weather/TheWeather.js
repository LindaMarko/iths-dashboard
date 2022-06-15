import { useEffect, useState } from 'react';

import * as API from '../../api/API.js';
import Card from '../UI/Card';
import styles from './TheWeather.module.css';

const TheWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await API.getWeather(`/.netlify/functions/get-weather`);
      console.log(res.data);
      // if (!res.ok) {
      //   throw new Error('Something went wrong');
      // }

      // const resData = await res.json();

      setWeatherData(res.data);
      console.log(weatherData);
      setIsLoading(false);
    };

    fetchWeather().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
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

  // // Sunrise and sunset data
  // const sunriseConvert = new Date(weatherData.sys.sunrise * 1000);
  // const sunriseTime = sunriseConvert.toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  // const sunsetConvert = new Date(weatherData.sys.sunset * 1000);
  // const sunsetTime = sunsetConvert.toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  return (
    <Card>
      {/* <section className={styles.weather}>
        <h1 className={styles.city}>{weatherData.name}</h1>
        <p className={styles.desc}>{weatherData.weather[0].description}</p>
        <h2 className={styles.degree}>{weatherData.main.temp.toFixed(1)}°C</h2>
        <p className={styles.feels}>
          Feels like: {weatherData.main.feels_like.toFixed(1)}°C{' '}
        </p>
        <img
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <div className={styles.sunTime}>
          <p>Sunrise: {sunriseTime}</p>
          <p>Sunset: {sunsetTime}</p>
        </div>
      </section> */}
    </Card>
  );
};

export default TheWeather;
