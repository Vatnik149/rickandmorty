import React, { FC, useState } from 'react';
import './style.scss';
import { CharactersModels } from '../../../models/CharacterModels';
import BackBtn from '../../BackBtn';
import { LocationModels } from '../../../models/LocationModels';

interface LocationProfileProps extends Pick<LocationModels, 'name' | 'dimension'| 'type'> {}
const Profile: FC<LocationProfileProps> = (props) => {
  const { name, dimension, type} = props; 
  return (
    <section className="profileInfoEp">
    <BackBtn/>
    <div className="cardInfo">
        <div className="name">
            <h1>{name}({type})</h1>
        </div>
        <div className="desc">
            <div className="type-block">
                <h3>Type</h3>
                <p>{type}</p>
            </div>
            <div className="type-block">
                <h3>Dimension</h3>
                <p>{dimension}</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default Profile;
