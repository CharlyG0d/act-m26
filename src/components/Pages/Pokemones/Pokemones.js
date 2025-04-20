import { useState } from 'react';
import SearchForm from '../../SearchForm/SearchForm';
import PokemonList from '../../PokemonList/PokemonList';
import usePokemon from '../../Hook/index';
import styles from './Pokemones.module.css';
import pikachu from '../../../assets/confused-pikachu.png';


const Pokemones = () => {
  const [search, setSearch] = useState('');
  const { pokemon, loading, error, loadMore } = usePokemon(search);

  return (
    <section className={styles.container}>
      <h2>Lista de Pokemones</h2>
      <SearchForm onSearch={setSearch} />

      {loading && <div className={styles.spinner}></div>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && pokemon.length === 0 && (
        <article className={styles.notFoundContainer}>
          <img src={pikachu} alt="Pikachu confundido" className={styles.image} />
          <p className={styles.notFound}>No se encontró ningún Pokémon con ese nombre.</p>
          <button className={styles.resetBtn} onClick={() => setSearch('')}>
            Volver a ver todos
          </button>
        </article>
      )}

      {!loading && !error && pokemon.length > 0 && (
        <>
          <PokemonList pokemon={pokemon} />
          <button className={styles.loadMoreBtn} onClick={loadMore}>
            Cargar más Pokémon
          </button>
        </>
      )}
    </section>
  );
};

export default Pokemones;
