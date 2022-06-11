import styles from './Values.module.css';
import logoLarge from '../../assets/ITHS_logo_liggande_Payoff_Pos.png';

import Card from '../UI/Card';

const Values = () => {
  return (
    <Card>
      <section className={styles.values}>
        <h1 className={styles.title}>IT-Högskolans värderingar</h1>
        <div className={styles.lists}>
          <h2 className={styles.listTitle}>✨Kvalitet</h2>
          <ul>
            <li>Relevant kunskap</li>
            <li>Pedagogiska utbildare och professionell atmosfär</li>
            <li>Engagerad</li>
          </ul>
        </div>
        <div className={styles.lists}>
          <h2 className={styles.listTitle}>🧭Branschnära</h2>
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
          <h2 className={styles.listTitle}>💡Inspiration</h2>
          <ul>
            <li>Passion för IT och en vilja att lära sig</li>
            <li>Energi genom samarbeten</li>
            <li>Engagerande kursinnehåll och lärare</li>
            <li>Utmanande uppgifter, case och projekt - Learning by doing!</li>
          </ul>
        </div>
        <img className={styles.logo} src={logoLarge} alt="ITHS logo" />
      </section>
    </Card>
  );
};
export default Values;
