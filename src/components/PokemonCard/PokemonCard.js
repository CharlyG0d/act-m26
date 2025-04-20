import styles from './PokemonCard.module.css';

const PokemonCard = ({ pokemon }) => (
  <article className={styles.card}>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    <p>Tipo: {pokemon.types.map(t => t.type.name).join(', ')}</p>
  </article>
);

export default PokemonCard;