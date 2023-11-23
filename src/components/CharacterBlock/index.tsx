import React, { FC, useState, useEffect, useContext } from 'react';
import './style.scss';
import { CharactersModels } from '../../models/CharacterModels';
import CharacterService from '../../services/CharacterService';
import CharacterCard from '../CharacterCard';
import { RootState } from '../../store/RootState';
import { useSelector } from 'react-redux';
import { SearchContext, SearchContextProps } from '../../App';
import { Link } from 'react-router-dom';

const CharacterBlock: FC = () => {
  const [characters, setCharacters] = useState<CharactersModels[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const characterSpeciesSort = useSelector((state: RootState) => state.filters.characterSpeciesSort);
  const characterGenderSort = useSelector((state: RootState) => state.filters.characterGenderSort);
  const characterStatusSort = useSelector((state: RootState) => state.filters.characterStatusSort);
  const { searchValue } = useContext(SearchContext) as SearchContextProps;

  async function fetchCharacters() {
    try {
      const response = await CharacterService.fetchCharacters(pages, characterSpeciesSort.name, characterGenderSort.name, characterStatusSort.name, searchValue);
      setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setCharacters([]);
    setPages(1);
  }, [characterSpeciesSort.name, characterGenderSort.name, characterStatusSort.name, searchValue]);
  useEffect(() => {
    fetchCharacters();
  }, [pages, characterSpeciesSort.name, characterGenderSort.name, characterStatusSort.name, searchValue]);

  const handleLoadMore = () => {
    setPages((prevPages) => prevPages + 1);
  };

  return (
    <section className="cardBlock">
        <div className="cardItems">
        {characters.map((obj, i) => (
          <Link to={`/characters-details/${obj.id}`} key={i} className='cardLink'>
            <CharacterCard image={obj.image} name={obj.name} gender={obj.gender} />
          </Link>
        ))}
        </div>
      <button onClick={handleLoadMore} className="loadMore">
        Load More
      </button>
    </section>
  );
};

export default CharacterBlock;
