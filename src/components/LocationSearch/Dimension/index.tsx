import React, { FC, useEffect, useState } from 'react';
import arrow from '../../../assets/img/arrow-drop-down.svg';
import '../style.scss'; 
import { useDispatch, useSelector } from 'react-redux';
// import filterSlice, { setLocationDimensionSort } from '../../../store/slices/filterSlice'; // Remove this import if not used
import { RootState } from '../../../store/RootState';
import LocationsService from '../../../services/LocationService';
import { setLocationDimensionSort } from '../../../store/slices/filterSlice';

const LocationDimension: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const locationDimensionSort = useSelector((state: RootState) => state.filters.locationDimensionSort);
  const [page, setPage] = useState<number>(1);
  const [dimensions, setDimensions] = useState<string[]>([]);

  const list = [
    { name: '', sortProperty: '' },
    ...dimensions.map((dimension) => ({ name: dimension, sortProperty: 'dimension' })),
  ];

  const onClickListItem = (selectedItem: { name: string; sortProperty: string }) => {
    setOpen(false);
    dispatch(setLocationDimensionSort(selectedItem));
    console.log(locationDimensionSort.name);
  };

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await LocationsService.fetchLocations(page, "","", "");
        const dimensionsFromAPI = response.data.results.map((location: any) => location.dimension);
        setDimensions((prevDimensions: any) => {
          const uniqueDimensions = new Set([...prevDimensions, ...dimensionsFromAPI]);
          return Array.from(uniqueDimensions);
        });
        console.log(dimensions);
        if (page <= 7) {
          setPage(page + 1);
        } else {
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }
    fetchLocation();
  }, [page]);

  return (
    <div className={`selecter ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
      <div className="selecter-choice">
        <p className="selecter-name">{locationDimensionSort.name || 'Dimension'}</p>
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
export default LocationDimension;
