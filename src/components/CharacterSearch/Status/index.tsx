import React, { FC, useState } from 'react';
import arrow from '../../../assets/img/arrow-drop-down.svg';
import "../CharacterFilter/style.scss";
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../../store/RootState';
import { setCharacterStatusSort } from '../../../store/slices/filterSlice';



const CharacterStatus: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const characterStatusSort = useSelector((state: RootState) => state.filters.characterStatusSort);
  const list = [
    { name: 'Alive', sortProperty: 'status' },
    { name: 'Dead', sortProperty: 'status' },
    { name: 'unknown', sortProperty: 'status' }
  ];

  const onClickListItem = (selectedItem: { name: string; sortProperty: string }) => {
    setOpen(false);
    dispatch(setCharacterStatusSort(selectedItem))
    console.log(characterStatusSort.name)
  }

  return (
    <div className={`selecter ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
      <div className="selecter-choice">
        <p className="selecter-name">{characterStatusSort.name || 'Species'}</p>
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

export default CharacterStatus;
