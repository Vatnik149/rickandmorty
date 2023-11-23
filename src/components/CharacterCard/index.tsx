// CharacterCard.tsx
import React, { FC } from 'react';
import  './style.scss';
import { CharactersModels } from '../../models/CharacterModels';

interface CharacterCardProps extends Pick<CharactersModels, 'image' | 'name' | 'gender'> {}

const CharacterCard: FC<CharacterCardProps> = (props) => {
  const { image, name, gender } = props; 

  return (
    <div className="characterCart">
      <div className="pic-block">
        <img src={image} alt={`${name} avatar`} />
      </div>
      <div className="description">
        <div className="name">
            <h6>{name}</h6>
        </div>
        <div className="gender">
            <p>{gender}</p>
        </div>
    </div>
    </div>
  );
};

export default CharacterCard;
