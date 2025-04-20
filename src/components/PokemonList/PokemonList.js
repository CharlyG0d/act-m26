import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = ({ pokemon }) => (
  <article className={styles.grid}>
    {pokemon.map(p => (
      <PokemonCard key={p.id} pokemon={p} />
    ))}
  </article>
);

export default PokemonList;