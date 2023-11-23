import React, { FC, useContext, useState, ChangeEvent, useCallback } from 'react';
import "./style.scss";
import { SearchContext, SearchContextProps } from '../../App';
import debounce from 'debounce';

const EpisodesSearch: FC = () => {
  const [value, setValue] = useState('');
  const context = useContext(SearchContext) as SearchContextProps;


  const { setEpisodesValue } = context;
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setEpisodesValue(str);
    }, 1000),
    [setEpisodesValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    updateSearchValue(inputValue);
    
  };

  return (
    <section className="episodesblock">
      <div className="container">
          <div className="filterLocation-input">
            <i className="icons"></i>
            <input  value={value}
                onChange={handleChange}
                placeholder="Filter by name..."/>
          </div>
      </div>
    </section>
  );
};

export default EpisodesSearch;
