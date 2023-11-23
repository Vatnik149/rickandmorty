import React, { FC, useContext, useState, ChangeEvent, useCallback } from 'react';
import "./style.scss";
import { SearchContext, SearchContextProps } from '../../../App';
import debounce from 'debounce';

import CharacterSpecies from '../Species';
import CharacterGender from '../Gender';
import CharacterStatus from '../Status';
import CharacterFilter from '../Filter';
import Modal from '../../Model/ModalCharacter';

const CharacterSearch: FC = () => {
  const [value, setValue] = useState('');
  const [modal, setModel] = useState<boolean>(false)
  const context = useContext(SearchContext) as SearchContextProps;


  const { setEpisodesValue } = context;
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setEpisodesValue(str);
    }, 1000),
    [setEpisodesValue]
  );


  return (
<section className="searchblock">
    <div className="container">
        <CharacterFilter/>
        <button className="advFilter" onClick={()=>setModel(true)}>
            <i></i>
            <p>ADVANCED FILTERS</p>
        </button>
       <CharacterSpecies/>
       <CharacterGender/>
       <CharacterStatus/>
    </div>
    {
        modal && (
            <Modal onClose={()=>setModel(!modal)} />
        )
    }
   
</section>
  );
};

export default CharacterSearch;
