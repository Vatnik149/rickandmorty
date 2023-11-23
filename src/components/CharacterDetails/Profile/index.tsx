import React, { FC, useState } from 'react';
import './style.scss';
import { CharactersModels } from '../../../models/CharacterModels';
import BackBtn from '../../BackBtn';

interface CharacterProfileProps extends Pick<CharactersModels, 'name' | 'image'> {}
const Profile: FC<CharacterProfileProps> = (props) => {
  const { name, image } = props; 
  return (
      <section className="profile">
            <BackBtn/>
      <div className="character">
      <div className="pic-block">
          <img src={image} alt="" />
      </div>
      <div className="name-block">
          <p>{name}</p>
      </div>
      </div>
  </section>
  );
};

export default Profile;
