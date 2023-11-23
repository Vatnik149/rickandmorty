import React, { FC, useState } from 'react';
import './style.scss'; // You can style your modal in a separate CSS file
import CharacterGender from '../CharacterSearch/Gender';
import CharacterSpecies from '../CharacterSearch/Species';
import CharacterStatus from '../CharacterSearch/Status';


interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose}) => {
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
          
          <CharacterSpecies/>
          <CharacterGender/>
          <CharacterStatus/>
          <button className='apply'>APPLY</button>
        </div>
      </div>
    );
  };

export default Modal;