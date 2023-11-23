import React, { FC, useContext, useState, ChangeEvent, useCallback } from 'react';
import "../style.scss";
import { SearchContext, SearchContextProps } from '../../../App';
import debounce from 'debounce';

const LocationFilter: FC = () => {
  const [value, setValue] = useState('');
  const context = useContext(SearchContext) as SearchContextProps;


  const { setLocationValue } = context;
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setLocationValue(str);
    }, 1000),
    [setLocationValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    updateSearchValue(inputValue);
    
  };

  return (
    <div className="filterLocation-input">
    <i className="icons"></i>
    <input  value={value}
        onChange={handleChange}
        placeholder="Filter by name..."/>
    </div>
  );
};

export default LocationFilter;
