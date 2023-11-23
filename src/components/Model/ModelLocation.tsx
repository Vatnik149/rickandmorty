import React, { FC, useState } from 'react';
import './style.scss';
import CharacterGender from '../CharacterSearch/Gender';
import CharacterSpecies from '../CharacterSearch/Species';
import CharacterStatus from '../CharacterSearch/Status';
import LocationDimension from '../LocationSearch/Dimension';
import LocationType from '../LocationSearch/Type/Type';


interface ModalProps {
  onClose: () => void;
}

const ModalLocation: FC<ModalProps> = ({ onClose}) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="head">
            <h1>Filters</h1>
            <div className="close-button" onClick={onClose}>
                <span></span>
                <span></span>
            </div>
          </div>
          
          <LocationDimension/>
          <LocationType/>
          <CharacterStatus/>
          <button className='apply'>APPLY</button>
        </div>
      </div>
    );
  };

export default ModalLocation;