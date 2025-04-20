import { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca un Pokémon"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;