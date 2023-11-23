import React, { FC, useContext, useState, ChangeEvent, useCallback } from 'react';
import "../CharacterFilter/style.scss";

import debounce from 'debounce';
import { SearchContext, SearchContextProps } from '../../../App';

const CharacterFilter: FC = () => {
  const [value, setValue] = useState('');
  const context = useContext(SearchContext) as SearchContextProps;


  const { setSearchValue } = context;
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 1000),
    [setSearchValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    updateSearchValue(inputValue);
    
  };

  return (
    <div className="search-input">
    <i className="icons"></i>
    <input  value={value}
        onChange={handleChange}
        placeholder="Filter by name..."/>
    </div>
  );
};

export default CharacterFilter;
