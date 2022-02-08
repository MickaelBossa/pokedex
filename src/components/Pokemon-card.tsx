// Librairies
import React, { FunctionComponent, useState } from 'react';
import './Pokemon-card.css';
import { useHistory } from 'react-router-dom';

// Content
import Pokemon from '../models/pokemon';

// Tools
import formatDate from '../tools/format-date';
import formatType from '../tools/format-type';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = '#009688',
}) => {
  // States
  const [color, setColor] = useState<string>();

  // Fonctions
  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const history = useHistory();

  const goToPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  };

  return (
    <div
      className='col s6 m4'
      onClick={() => goToPokemon(pokemon.id)}
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <div className='card horizontal' style={{ borderColor: color }}>
        <div className='card-image'>
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
