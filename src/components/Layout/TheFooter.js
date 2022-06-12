import logoLarge from '../../assets/ITHS_logo_liggande.png';
import logoSmall from '../../assets/ITHS_logo.png';
import styles from './TheFooter.module.css';

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logoLarge} src={logoLarge} alt="ITHS logo" />
      <img className={styles.logoSmall} src={logoSmall} alt="ITHS logo" />
      <h1 className={styles.h1}>Wifi Lösenord: IloveITHS</h1>
    </footer>
  );
};

export default TheFooter;
