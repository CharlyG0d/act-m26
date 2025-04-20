import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const usePokemon = (search) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 50;

  const fetchPokemon = useCallback(async (reset = false) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${reset ? 0 : offset}&limit=${limit}`);
      const detailedData = await Promise.all(res.data.results.map(p => axios.get(p.url)));
      const data = detailedData.map(d => d.data);
      const filtered = search
        ? data.filter(p => p.name.includes(search.toLowerCase()))
        : data;

      setPokemon(prev => reset ? filtered : [...prev, ...filtered]);
      setError(null);
    } catch (err) {
      setError('Error al cargar los Pokémon');
    } finally {
      setLoading(false);
    }
  }, [search, offset]);

  useEffect(() => {
    fetchPokemon(true);
  }, [fetchPokemon]); // Usar la función como dependencia

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  useEffect(() => {
    if (offset !== 0) {
      fetchPokemon();
    }
  }, [offset, fetchPokemon]);

  return { pokemon, loading, error, loadMore };
};

export default usePokemon;
