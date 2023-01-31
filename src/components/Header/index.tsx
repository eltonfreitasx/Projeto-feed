//import { Logo } from '../../assets/Logo.js';
import igniteLogo from './../../assets/Ignite-simbol.svg'
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>

      <img src={igniteLogo} />

    </header>
  );
}
