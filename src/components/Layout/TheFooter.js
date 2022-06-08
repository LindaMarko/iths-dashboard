import logo from '../../assets/ithslogga.png';
import styles from './TheFooter.module.css';

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.h1}>Contact</h1>
      <img src={logo} alt="ITHS logo" />
    </footer>
  );
};

export default TheFooter;
