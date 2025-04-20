import styles from './Home.module.css';
import logo from '../../assets/logo.png';


const Home = () => {
  return (
    <article className={styles.home}>
      <h2>Bienvenido a la <span>Pokémon App</span></h2>
      <p>Explora todos los Pokemones y sus tipos usando la barra de navegación.</p>
      <img src={logo} alt="Logo de pokemon" className={styles.image} />
    </article>
  );
};

export default Home;