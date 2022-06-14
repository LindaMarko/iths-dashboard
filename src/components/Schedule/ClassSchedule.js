import { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './ClassSchedule.css';
import { getCurrentDaySchedule } from '../../assets/salsschema.js';

const ClassSchedule = () => {
  const [currentDay, setCurrentDay] = useState();
  const [currentDaySchedule, setCurrentDaySchedule] = useState([]);

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

    const time = new Date();
    const day = time.getDay();
    setCurrentDay(`${days[day]}`);
    setCurrentDaySchedule(getCurrentDaySchedule());

    const interval = setInterval(getCurrentDaySchedule, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <section>
        <h1 className="title">Dagens Salsschema</h1>
        {currentDaySchedule.length === 0 && (
          <h3 className="weekendText">No classes today</h3>
        )}
        <table>
          <thead>
            {currentDaySchedule.length > 0 && (
              <tr>
                <th>Class</th>
                <th>{currentDay}</th>
              </tr>
            )}
          </thead>
          <tbody>
            {currentDaySchedule.length > 0 &&
              currentDaySchedule.map((item) => (
                <tr key={item.class}>
                  <td>{item.class}</td>
                  <td>{item.classroom}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </Card>
  );
};

export default ClassSchedule;
