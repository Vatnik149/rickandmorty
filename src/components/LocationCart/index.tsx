// CharacterCard.tsx
import React, { FC } from 'react';
import './style.scss';
import { LocationModels } from '../../models/LocationModels';

interface LocationCardProps extends Pick<LocationModels, 'name' | 'type'> {}

const LoactionCard: FC<LocationCardProps> = (props) => {
  const {name, type} = props; 

  return (
    <div className="locationCart">
    <div className="text-desc">
        <p className="name">{name}</p>
        <p className="type">{type}</p>
    </div>
</div>
  );
};

export default LoactionCard;
