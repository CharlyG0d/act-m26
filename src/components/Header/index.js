import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Pokémon App</h1>
    <nav className={styles.nav}>
      <span><Link to="/">Inicio</Link></span>
      <span><Link to="/pokemones">Pokemones</Link></span>
      <span><Link to="/tipos">Tipos</Link></span>
    </nav>
  </header>
);

export default Header;
