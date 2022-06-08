import logo from '../../assets/ithslogga.png';
import styles from './TheHeader.module.css';

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Welcome to IT-Högskolan</h1>
      <img src={logo} alt="ITHS logo" />
    </header>
  );
};

export default TheHeader;
