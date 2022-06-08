import { useEffect, useState } from 'react';
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';
import styles from './TheClock.module.css';

import Card from '../UI/Card';

const TheClock = () => {
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [date, setDate] = useState();
  const [hourStyle, setHourStyle] = useState({});
  const [minuteStyle, setMinuteStyle] = useState({});
  const [secondStyle, setSecondStyle] = useState({});
  // const [value, setValue] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => setValue(new Date()), 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const setTime = () => {
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const hours = time.getHours();
      const hoursForClock = hours >= 13 ? hours % 12 : hours;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      setDate(time.getDate());

      setHourStyle({
        transform: `translate(-50%, -100%) rotate(${scale(
          hoursForClock,
          0,
          12,
          0,
          360
        )}deg)`,
      });

      setMinuteStyle({
        transform: `translate(-50%, -100%) rotate(${scale(
          minutes,
          0,
          60,
          0,
          360
        )}deg)`,
      });

      setSecondStyle({
        transform: `translate(-50%, -100%) rotate(${scale(
          seconds,
          0,
          60,
          0,
          360
        )}deg)`,
      });

      setCurrentTime(
        `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
      );

      setCurrentDate(`${days[day]}, ${months[month]} `);
    };

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };

    setTime();

    const interval = setInterval(() => {
      setTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <section>
        <div className={styles['clock-container']}>
          <div className={styles.clock}>
            <div
              className={`${styles.needle} ${styles.hour}`}
              style={hourStyle}
            ></div>
            <div
              className={`${styles.needle} ${styles.minute}`}
              style={minuteStyle}
            ></div>
            <div
              className={`${styles.needle} ${styles.second}`}
              style={secondStyle}
            ></div>
            <div className={styles['center-point']}></div>
          </div>

          <div className={styles.time}>{currentTime}</div>
          <div className={styles.date}>
            {currentDate}
            <span className={styles.circle}>{date}</span>
          </div>
        </div>
        {/* <p>Current time:</p>
        <Clock value={value} /> */}
      </section>
    </Card>
  );
};

export default TheClock;
