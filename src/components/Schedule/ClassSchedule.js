import { useEffect, useState, useMemo } from 'react';

import Card from '../UI/Card';
import './ClassSchedule.css';
import { Monday, Tuesday, Friday } from '../../assets/salsschema.js';

const ClassSchedule = () => {
  const [currentDay, setCurrentDay] = useState();
  const [currentDaySchedule, setCurrentDaySchedule] = useState([]);

  const schedule = useMemo(() => {
    return [
      {
        day: 'Monday',
        schedule: Monday,
      },
      {
        day: 'Tuesday',
        schedule: Tuesday,
      },
      {
        day: 'Friday',
        schedule: Friday,
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

  useEffect(() => {
    const getSchedule = () => {
      const time = new Date();
      const day = time.getDay();
      setCurrentDay(`${days[day]}`);

      const correctDay = schedule.find((el) => el.day === currentDay);
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
          <tr>
            <th>Class</th>
            <th>{currentDay}</th>
          </tr>
          {/* {currentDaySchedule.schedule.map((item) => (
            <tr>
              <td>{item.class}</td>
              <td>{item.classroom}</td>
            </tr>
          ))} */}
        </table>
      </section>
    </Card>
  );
};

export default ClassSchedule;
