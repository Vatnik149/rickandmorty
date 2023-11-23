import React, { FC, useState } from 'react';
import "../CharacterFilter/style.scss";
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../../store/RootState';
import { setCharacterGenderSort } from '../../../store/slices/filterSlice';



const CharacterGender: FC = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const characterGenderSort = useSelector((state: RootState) => state.filters.characterGenderSort);
  
  const list = [
    { name: '', sortProperty: '' },
    { name: 'Female', sortProperty: 'gender' },
    { name: 'Male', sortProperty: 'gender' },
    { name: 'Genderless', sortProperty: 'gender' },
    { name: 'unknow', sortProperty: 'gender' }
  ];

  const onClickListItem = (selectedItem: { name: string; sortProperty: string }) => {
    dispatch(setCharacterGenderSort(selectedItem))
    setOpen(false);
  }

  return (
    <div className={`selecter ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
      <div className="selecter-choice">
        <p className="selecter-name">{characterGenderSort.name || 'Gender'}</p>
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

export default CharacterGender;
