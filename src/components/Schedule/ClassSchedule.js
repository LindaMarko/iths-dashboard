import { useEffect, useState, useMemo } from 'react';

import Card from '../UI/Card';
import './ClassSchedule.css';
import { Monday, Tuesday, Friday } from '../../assets/salsschema.js';

const ClassSchedule = () => {
  const [currentDay, setCurrentDay] = useState();
  const [currentDaySchedule, setCurrentDaySchedule] = useState([]);

  const classSchedule = useMemo(() => {
    return [
      {
        day: 'Monday',
        schedule: [...Monday],
      },
      {
        day: 'Tuesday',
        schedule: [...Tuesday],
      },
      {
        day: 'Friday',
        schedule: [...Friday],
      },
    ];
  }, []);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const correctDay = classSchedule.find((el) => el.day === currentDay);
  console.log(correctDay);

  useEffect(() => {
    const getSchedule = () => {
      const time = new Date();
      const day = time.getDay();
      setCurrentDay(`${days[day]}`);

      setCurrentDaySchedule(correctDay);
      console.log(currentDay, currentDaySchedule);
    };

    getSchedule();

    const interval = setInterval(() => {
      getSchedule();
    }, 3600000);
    return () => clearInterval(interval);
  });

  return (
    <Card>
      <section>
        <h1>Dagens Salsschema</h1>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>{currentDay}</th>
            </tr>
          </thead>
          <tbody>
            {!correctDay && <h3 className="weekendText">No classes today</h3>}
            {/* {correctDay && currentDaySchedule.schedule.map((item) => (
              <tr key={item.class}>
                <td>{item.class}</td>
                <td>{item.classroom}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
    </Card>
  );
};

export default ClassSchedule;
