import React, { FC, useState } from 'react';
import arrow from '../../../assets/img/arrow-drop-down.svg';
import "../CharacterFilter/style.scss";
import { useDispatch, useSelector } from 'react-redux';
import filterSlice, { setCharacterSpeciesSort } from '../../../store/slices/filterSlice';
import { RootState } from '../../../store/RootState';



const CharacterSpecies: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const characterSpeciesSort = useSelector((state: RootState) => state.filters.characterSpeciesSort);
  const list = [
    { name: '', sortProperty: '' },
    { name: 'Human', sortProperty: 'species' },
    { name: 'Alien', sortProperty: 'species' }
  ];
  const onClickListItem = (selectedItem: { name: string; sortProperty: string }) => {
    setOpen(false);
    dispatch(setCharacterSpeciesSort(selectedItem))
    console.log(characterSpeciesSort.name)
  }

  return (
    <div className={`selecter ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
      <div className="selecter-choice">
        <p className="selecter-name">{characterSpeciesSort.name || 'Species'}</p>
        <i className="dropdown" onClick={() => setOpen(!open)}></i>
      </div>
      {open && (
        <div className="sort-pop active">
          <ul className="sort-items">
            {list.map((obj, i) => (
              <li key={i} className="sort-item" onClick={() => onClickListItem(obj)}><p>{obj.name == "" ? "All" : obj.name}</p></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterSpecies;
