import React, { FC, useContext, useState, ChangeEvent, useCallback } from 'react';
import "./style.scss";
import { SearchContext, SearchContextProps } from '../../App';
import debounce from 'debounce';
import LocationFilter from './Filter/Filter';
import LocationDimension from './Dimension';
import LocationType from './Type/Type';
import Modal from '../Model/ModalCharacter';
import ModalLocation from '../Model/ModelLocation';

const LocationSearch: FC = () => {
  const [value, setValue] = useState('');
  const [Model, setModel] = useState<boolean>(false)
  const context = useContext(SearchContext) as SearchContextProps;



  return (
    <section className="locationblock">
    <div className="container">
        <LocationFilter/>
        <button className="advFilter" onClick={()=>setModel(true)}>
            <i></i>
            <p>ADVANCED FILTERS</p>
        </button>
        <LocationDimension/>
        <LocationType/>
    </div>
    {
        Model && (
            <ModalLocation onClose={()=>setModel(!Modal)} />
        )
    }
   
</section>
  );
};

export default LocationSearch;
