// CharacterCard.tsx
import React, { FC } from 'react';
import './style.scss';

import { EpisodeModels } from '../../../models/EpisodesModels';

interface EpisodesCardProps extends Pick<EpisodeModels, 'name' | 'air_date' | 'episode'> {}

const EpisodeCard: FC<EpisodesCardProps> = (props) => {
  const {name, air_date, episode} = props; 

  return (
    
    <div className="episodeCart">
    <div className="text-desc">
        <p className="name">{name}</p>
        <p className="air-date">{air_date}</p>
        <p className="episode">{episode}</p>
    </div>
</div>
  );
};

export default EpisodeCard;
