import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

import Card from '../UI/Card';

const TheClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card>
      <section>
        <p>Current time:</p>
        <Clock value={value} />
      </section>
    </Card>
  );
};

export default TheClock;
