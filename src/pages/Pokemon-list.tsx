// Librairies
import React, { FunctionComponent, useState, useEffect } from 'react';

// Content
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

// Composants
import PokemonCard from '../components/Pokemon-card';

const PokemonList: FunctionComponent = () => {
  // States
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // useEffect
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1 className='center'>Pokédex</h1>
      <div className='container'>
        <div className='row'>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
