import styles from './Values.module.css';

import Card from '../UI/Card';

const Values = () => {
  return (
    <Card>
      <section className={styles.values}>
        <h1 className={styles.title}>IT-Högskolans värderingar</h1>
        <div className={styles.lists}>
          <h3 className={styles.listTitle}>✨Kvalitet</h3>
          <ul>
            <li>Relevant kunskap</li>
            <li>Pedagogiska utbildare och professionell atmosfär</li>
            <li>Engagerad</li>
          </ul>
        </div>
        <div className={styles.lists}>
          <h3 className={styles.listTitle}>🧭Branschnära</h3>
          <ul>
            <li>
              Utbildingar som är kopplade till arbetslivets förväntningar och
              behov
            </li>
            <li>Samverkan med företag</li>
            <li>Uppdaterade med marknaden</li>
            <li>Rätt LIA-plats</li>
          </ul>
        </div>
        <div className={styles.lists}>
          <h3 className={styles.listTitle}>💡Inspiration</h3>
          <ul>
            <li>Passion för IT och en vilja att lära sig</li>
            <li>Energi genom samarbeten</li>
            <li>Engagerande kursinnehåll och lärare</li>
            <li>Utmanande uppgifter, case och projekt - Learning by doing!</li>
          </ul>
        </div>
      </section>
    </Card>
  );
};
export default Values;
