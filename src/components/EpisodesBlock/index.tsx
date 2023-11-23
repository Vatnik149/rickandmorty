import React, { FC, useState, useEffect, useContext } from 'react';
import './style.scss';

import CharacterCard from '../CharacterCard';
import {RootState} from '../../store/RootState';
import { useSelector } from 'react-redux';
import { SearchContext, SearchContextProps } from '../../App';
import { Link } from 'react-router-dom';
import LocationsService from '../../services/LocationService';
import { LocationModels } from '../../models/LocationModels';
import LoactionCard from '../LocationCart';
import EpisodesService from '../../services/EpisodesService';
import { EpisodeModels } from '../../models/EpisodesModels';
import EpisodeCard from './EpisodesCart';

const EpisodesBlock: FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeModels[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const {episodesValue} = useContext(SearchContext) as SearchContextProps;

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await EpisodesService.fetchEpisodes(pages, episodesValue);
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchLocation();
  }, [pages, episodesValue]);

  const handleLoadMore = () => {
      setPages(pages+1);
  };
  return (
    <div className="locationblock">
    <section className="cardblock">
      {episodes.map((obj) => (
        <Link to={`/episode-details/${obj.id}`} className="cartLink">
           <EpisodeCard name={obj.name} air_date={obj.air_date} episode={obj.episode}/>
        </Link>
      ))}
    </section>
    <button onClick={handleLoadMore} className="loadMore">
        Load More
    </button>
  </div>
  );
};

export default EpisodesBlock;