import logoLarge from '../../assets/ITHS_logo_liggande.png';
import logoSmall from '../../assets/ITHS_logo.png';
import styles from './TheHeader.module.css';

const TheHeader = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        Välkommen till <br />
        IT-Högskolan
      </h1>
      {!props.onlineState && (
        <h1 className={styles.offlineText}>You are offline</h1>
      )}
      <img className={styles.logoLarge} src={logoLarge} alt="ITHS logo" />
      <img className={styles.logoSmall} src={logoSmall} alt="ITHS logo" />
    </header>
  );
};

export default TheHeader;
