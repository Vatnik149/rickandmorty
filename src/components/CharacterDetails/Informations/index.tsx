// Information.tsx
import React, { FC } from 'react';
import './style.scss';
import InfoCart from './InfoCart';
import { CharactersModels } from '../../../models/CharacterModels';

interface OriginLocation {
  name: string;
  url: string;
}

interface InformationProps extends Pick<CharactersModels, 'gender' | 'status' | 'species' | 'origin' | 'type' | 'location'> {
  origin: OriginLocation;
  location: OriginLocation;
}

const Information: FC<InformationProps> = (props) => {
  const { gender, status, species, origin, type, location } = props;

  return (
    <section className="information">
    <div className="head">
        <h3>Information</h3>
    </div>
    <ul className="info-item">
          <li><InfoCart name='Gender' desc={gender} /></li>
          <li><InfoCart name='Status' desc={status} /></li>
          <li><InfoCart name='Species' desc={species} /></li>
          <li><InfoCart name='Origin' desc={origin.name} /></li>
          <li><InfoCart name='Type' desc={type} /></li>
          <li><InfoCart name='Location' desc={location.name} /></li>
    </ul>
    </section>
  );
};

export default Information;
