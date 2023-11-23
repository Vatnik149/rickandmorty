import React, { FC, useState } from 'react';
import './style.scss';
import { CharactersModels } from '../../../models/CharacterModels';
import BackBtn from '../../BackBtn';
import { LocationModels } from '../../../models/LocationModels';
import { EpisodeModels } from '../../../models/EpisodesModels';
import { type } from 'os';

interface EpisodesProfileProps extends Pick<EpisodeModels, 'name' | 'air_date'| 'episode'> {}
const Profile: FC<EpisodesProfileProps> = (props) => {
  const { name, air_date, episode} = props; 
  return (
    <section className="profileInfoEp">
    <div className="cardInfo">
        <div className="name">
            <h1>{name}</h1>
        </div>
        <div className="desc">
            <div className="type-block">
                <h3>Episode</h3>
                <p>{episode}</p>
            </div>
            <div className="type-block">
                <h3>Date</h3>
                <p>{air_date}</p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Profile;
