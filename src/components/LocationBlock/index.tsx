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

const LoactionBlock: FC = () => {
  const [locations, setLocations] = useState<LocationModels[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const locationDemensionSort = useSelector((state: RootState) => state.filters.locationDimensionSort);
  const locationTypeSort = useSelector((state: RootState) => state.filters.locationTypeSort);
  const {locationValue} = useContext(SearchContext) as SearchContextProps;

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await LocationsService.fetchLocations(pages, locationValue,locationDemensionSort.name,locationTypeSort.name );
        setLocations(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchLocation();
  }, [pages, locationDemensionSort.name, locationTypeSort.name,  locationValue]);

  const handleLoadMore = () => {
      setPages(pages+1);
  };
  return (
    <div className="locationblock">
    <section className="cardblock">
      {locations.map((obj) => (
        <Link to={`/location-details/${obj.id}`} className="cartLink">
            <LoactionCard key={obj.id} name={obj.name} type={obj.type}/>
        </Link>
      ))}
    </section>
    <button onClick={handleLoadMore} className="loadMore">
        Load More
    </button>
  </div>
  );
};

export default LoactionBlock;