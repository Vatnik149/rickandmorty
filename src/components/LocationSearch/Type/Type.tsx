import React, { FC, useEffect, useState } from 'react';
import arrow from '../../../assets/img/arrow-drop-down.svg';
import styles from '..//style.module.scss'; // Corrected the import path
import { useDispatch, useSelector } from 'react-redux';
// import filterSlice, { setLocationDimensionSort } from '../../../store/slices/filterSlice'; // Remove this import if not used
import { RootState } from '../../../store/RootState';
import LocationsService from '../../../services/LocationService';
import { setLocationTypeSort } from '../../../store/slices/filterSlice';

const LocationType: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const locationtypeSort = useSelector((state: RootState) => state.filters.locationTypeSort);
  const [page, setPage] = useState<number>(1);
  const [types, setTypes] = useState<string[]>([]);

  const list = [
    { name: '', sortProperty: '' },
    ...types.map((type) => ({ name: type, sortProperty: 'type' })),
  ];

  const onClickListItem = (selectedItem: { name: string; sortProperty: string }) => {
    setOpen(false);
    dispatch(setLocationTypeSort(selectedItem));
    console.log(locationtypeSort.name);
  };

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await LocationsService.fetchLocations(page, "", "", "");
        const typesFromAPI = response.data.results.map((location: any) => location.type);
        setTypes((prevTypes: any) => {
          const uniqueTypes = new Set([...prevTypes, ...typesFromAPI]);
          return Array.from(uniqueTypes);
        });
        console.log(types);
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
        <p className="selecter-name">{locationtypeSort.name || 'Gender'}</p>
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

export default LocationType;
