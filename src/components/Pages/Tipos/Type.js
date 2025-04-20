import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Tipos.module.css';

const Tipos = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    const fetchTipos = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/type');
      setTipos(res.data.results);
    };
    fetchTipos();
  }, []);

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Tipos de Pokémon</h2>
      <ul className={styles.typeList}>
        {tipos.map((tipo) => (
          <li key={tipo.name} className={styles.typeItem}>
            {tipo.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Tipos;
